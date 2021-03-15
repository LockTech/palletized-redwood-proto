import { useCallback, useState } from 'react'
import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import Button from 'react-bootstrap/Button'

import useQueryError from 'src/hooks/UseQueryError/useQueryError'

import DeleteModal from 'src/components//DeleteModal'
import WarehouseNameCell from 'src/components/warehouse/WarehouseNameCell'

import { QUERY } from 'src/components/warehouse/WarehouseListCell'

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
  const [deleteQuery, { called, error }] = useMutation(
    DELETE_WAREHOUSE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.warehouses())
        toast.success('Warehouse has been successfully deleted.')
      },
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  )

  useQueryError(called, error)

  const [deleteModalVis, setDeleteModalVis] = useState(false)

  const onHideDeleteModal = useCallback(() => {
    setDeleteModalVis(false)
  }, [setDeleteModalVis])

  const onDeleteClick = useCallback(() => {
    setDeleteModalVis(true)
  }, [setDeleteModalVis])
  const onDeleteConfirm = useCallback(() => {
    deleteQuery({ variables: { id } })
    setDeleteModalVis(false)
  }, [deleteQuery, setDeleteModalVis, id])

  return (
    <>
      <DeleteModal
        onConfirm={onDeleteConfirm}
        onHide={onHideDeleteModal}
        show={deleteModalVis}
      >
        <p>
          Are you sure you want to delete the{' '}
          <code>
            <WarehouseNameCell id={id} />
          </code>{' '}
          warehouse?
        </p>
        <p>
          <strong>
            This action <u className="text-danger">cannot be undone</u> and{' '}
            <em>will</em> delete all Locations belonging to this warehouse.
          </strong>
        </p>
        <p>
          If deleted, you will have the opportunity to move each Pallet which is
          tagged to a will-be-deleted Location.
        </p>
      </DeleteModal>
      <Button block onClick={onDeleteClick} variant="outline-danger">
        Delete
      </Button>
    </>
  )
}
export default WarehouseDeleteCell
