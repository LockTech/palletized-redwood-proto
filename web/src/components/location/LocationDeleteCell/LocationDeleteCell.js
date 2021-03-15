import { useCallback, useState } from 'react'
import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import Button from 'react-bootstrap/Button'

import useQueryError from 'src/hooks/UseQueryError/useQueryError'

import DeleteModal from 'src/components/DeleteModal'
import WarehouseNameCell from 'src/components/warehouse/WarehouseNameCell'
import LocationNameCell from 'src/components/location/LocationNameCell'

export const DELETE_LOCATION_MUTATION = gql`
  mutation DeleteLocationMutation($id: String!) {
    deleteLocation(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const LocationDeleteCell = ({ id, warehouseId }) => {
  const [deleteQuery, { called, error }] = useMutation(
    DELETE_LOCATION_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.locations())
        toast.success('Location has been successfully deleted.')
      },
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
          Are you sure you want to delete Location{' '}
          <code>
            <LocationNameCell id={id} />
          </code>{' '}
          from Warehouse{' '}
          <code>
            <WarehouseNameCell id={warehouseId} />
          </code>
          ?
        </p>
        <p>
          <strong>
            This action <u className="text-danger">cannot be undone</u>.
          </strong>
        </p>
      </DeleteModal>
      <Button block onClick={onDeleteClick} variant="outline-danger">
        Delete
      </Button>
    </>
  )
}
export default LocationDeleteCell
