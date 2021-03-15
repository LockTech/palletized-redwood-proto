import { useCallback, useState } from 'react'
import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import Button from 'react-bootstrap/Button'

import useQueryError from 'src/hooks/UseQueryError/useQueryError'

import LocationDeleteModal from 'src/components/location/LocationDeleteModal'

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

export const LocationDeleteCell = ({ id, relistQuery, warehouseId }) => {
  const [deleteQuery, { called, error }] = useMutation(
    DELETE_LOCATION_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.locations())
        toast.success('Location has been successfully deleted.')
      },
      refetchQueries: [{ query: relistQuery, variables: { warehouseId } }],
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
      <LocationDeleteModal
        id={id}
        onConfirm={onDeleteConfirm}
        onHide={onHideDeleteModal}
        show={deleteModalVis}
        warehouseId={warehouseId}
      />
      <Button block onClick={onDeleteClick} variant="outline-danger">
        Delete
      </Button>
    </>
  )
}
export default LocationDeleteCell
