import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import Card from 'react-bootstrap/Card'

import LocationForm from 'src/components/location/LocationForm/LocationForm'
import LocationTooltip from 'src/components/location/LocationTooltip/LocationTooltip'

const LOCATION_CREATE_MUTATION = gql`
  mutation LocationCreateMutation($input: CreateLocationInput!) {
    createLocation(input: $input) {
      id
    }
  }
`

const LocationCreateCell = () => {
  const [createLocation, { loading, error }] = useMutation(
    LOCATION_CREATE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.locations())
        toast.success('Location has been successfully created.')
      },
    }
  )

  const onSave = (input) => {
    try {
      createLocation({ variables: { input } })
    } catch (err) {
      // console.log(err)
    }
  }

  return (
    <Card>
      <Card.Header className="d-flex flex-direction-row align-items-center justify-content-between">
        New Location
        <LocationTooltip />
      </Card.Header>
      <Card.Body>
        <LocationForm onSave={onSave} error={error} loading={loading} />
      </Card.Body>
    </Card>
  )
}

export default LocationCreateCell
