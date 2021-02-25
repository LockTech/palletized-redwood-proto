import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import LocationForm from 'src/components/LocationForm'

export const QUERY = gql`
  query FIND_LOCATION_BY_ID($id: String!) {
    location: location(id: $id) {
      id
      name
      updatedAt
      createdAt
      warehouseId
    }
  }
`
const UPDATE_LOCATION_MUTATION = gql`
  mutation UpdateLocationMutation($id: String!, $input: UpdateLocationInput!) {
    updateLocation(id: $id, input: $input) {
      id
      name
      updatedAt
      createdAt
      warehouseId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ location }) => {
  const { addMessage } = useFlash()
  const [updateLocation, { loading, error }] = useMutation(
    UPDATE_LOCATION_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.locations())
        addMessage('Location updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateLocation({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Location {location.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <LocationForm
          location={location}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
