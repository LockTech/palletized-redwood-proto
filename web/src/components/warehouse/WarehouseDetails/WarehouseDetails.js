import { useCallback, useState } from 'react'
import { useMutation, useFlash } from '@redwoodjs/web'
import { routes, navigate } from '@redwoodjs/router'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

import LocaleTime from 'src/components/LocaleTime'
import WarehouseDeleteModal from 'src/components/warehouse/WarehouseDeleteModal'

const DELETE_WAREHOUSE_MUTATION = gql`
  mutation DeleteWarehouseMutation($id: String!) {
    deleteWarehouse(id: $id) {
      id
    }
  }
`

const WarehouseDetails = ({ warehouse }) => {
  const { addMessage } = useFlash()
  const [deleteWarehouseQuery] = useMutation(DELETE_WAREHOUSE_MUTATION, {
    onCompleted: () => {
      navigate(routes.warehouses())
      addMessage('Warehouse has been successfully deleted.', {
        variant: 'success',
      })
    },
  })

  const [deleteModalVis, setDeleteModalVis] = useState(false)
  const onHideDeleteModal = useCallback(() => {
    setDeleteModalVis(false)
  }, [setDeleteModalVis])

  const onDeleteClick = useCallback(() => {
    setDeleteModalVis(true)
  }, [setDeleteModalVis])
  const onDeleteConfirm = useCallback(() => {
    deleteWarehouseQuery({ variables: { id: warehouse.id } })
    setDeleteModalVis(false)
  }, [deleteWarehouseQuery, setDeleteModalVis, warehouse])

  return (
    <>
      <WarehouseDeleteModal
        name={warehouse.name}
        onConfirm={onDeleteConfirm}
        onHide={onHideDeleteModal}
        show={deleteModalVis}
      />
      <Table className="details-table">
        <tbody>
          <tr>
            <th>ID</th>
            <td>{warehouse.id}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{warehouse.name}</td>
          </tr>
          <tr>
            <th>Created</th>
            <td>
              <LocaleTime datetime={warehouse.createdAt} />
            </td>
          </tr>
          <tr>
            <th>Last Updated</th>
            <td>
              <LocaleTime datetime={warehouse.updatedAt} />
            </td>
          </tr>
        </tbody>
      </Table>
      <Button block onClick={onDeleteClick} variant="outline-danger">
        Delete
      </Button>
    </>
  )
}

export default WarehouseDetails
