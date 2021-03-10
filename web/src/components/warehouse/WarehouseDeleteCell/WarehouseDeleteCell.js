import { useCallback, useState } from 'react'
import { navigate, routes } from '@redwoodjs/router'
import { useFlash, useMutation } from '@redwoodjs/web'
import Button from 'react-bootstrap/Button'

import WarehouseDeleteModal from 'src/components/warehouse/WarehouseDeleteModal'

export const DELETE_WAREHOUSE_MUTATION = gql`
  mutation DeleteWarehouseMutation($id: String!) {
    deleteWarehouse(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const WarehouseDeleteCell = ({ id }) => {
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
    deleteWarehouseQuery({ variables: { id } })
    setDeleteModalVis(false)
  }, [deleteWarehouseQuery, setDeleteModalVis, id])

  return (
    <>
      <WarehouseDeleteModal
        id={id}
        onConfirm={onDeleteConfirm}
        onHide={onHideDeleteModal}
        show={deleteModalVis}
      />
      <Button block onClick={onDeleteClick} variant="outline-danger">
        Delete Warehouse
      </Button>
    </>
  )
}
export default WarehouseDeleteCell
