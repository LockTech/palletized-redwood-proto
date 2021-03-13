import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import Card from 'react-bootstrap/Card'

import LocationForm from 'src/components/location/LocationForm'

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
      createLocation({
        variables: {
          input: {
            name: input.name,
            warehouseId: input.warehouse.id,
            warehouseName: input.warehouse.name,
          },
        },
      })
    } catch (err) {
      // console.log(err)
    }
  }

  return (
    <Card>
      <Card.Body>
        <LocationForm
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </Card.Body>
    </Card>
  )
}

export default LocationCreateCell
