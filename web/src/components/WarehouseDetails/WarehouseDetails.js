import { useCallback, useState } from 'react'
import { useMutation, useFlash } from '@redwoodjs/web'
import { routes, navigate } from '@redwoodjs/router'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

import DeleteModal from 'src/components/DeleteModal'

import './WarehouseDetails.css'

const DELETE_WAREHOUSE_MUTATION = gql`
  mutation DeleteWarehouseMutation($id: String!) {
    deleteWarehouse(id: $id) {
      id
    }
  }
`

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toLocaleString()}
    </time>
  )
}

const WarehouseDetails = ({ warehouse }) => {
  const { addMessage } = useFlash()
  const [deleteWarehouseQuery] = useMutation(DELETE_WAREHOUSE_MUTATION, {
    onCompleted: () => {
      navigate(routes.warehouses())
      addMessage('Warehouse deleted.', { classes: 'rw-flash-success' })
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
      <DeleteModal
        onConfirm={onDeleteConfirm}
        onHide={onHideDeleteModal}
        show={deleteModalVis}
      >
        <p>
          Are you sure you want to <strong>delete</strong> the {warehouse.name}{' '}
          warehouse?
        </p>
        <p>
          This action{' '}
          <u className="text-danger">
            <strong>cannot be undone</strong>
          </u>{' '}
          and <em>will</em> delete all Locations belonging to this warehouse.
        </p>
        <p>
          If deleted, you will have the opportunity to move each Pallet which is
          tagged to a will-be-deleted Location.
        </p>
      </DeleteModal>
      <Table className="warehouse-table">
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
            <td>{timeTag(warehouse.createdAt)}</td>
          </tr>
          <tr>
            <th>Last Updated</th>
            <td>{timeTag(warehouse.updatedAt)}</td>
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
