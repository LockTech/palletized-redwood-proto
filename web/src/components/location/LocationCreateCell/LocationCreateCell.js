import { useMutation, toast } from '@redwoodjs/web'
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
  const [createWarehouse, { loading, error }] = useMutation(
    LOCATION_CREATE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.warehouses())
        toast.success('Warehouse has been successfully created.')
      },
    }
  )

  const onSave = (input) => {
    try {
      createWarehouse({ variables: { input } })
    } catch (err) {
      // console.log(err)
    }
  }

  return (
    <Card>
      <Card.Body>
        <LocationForm
          onSave={onSave}
          resultError={error}
          resultLoading={loading}
        />
      </Card.Body>
    </Card>
  )
}

export default LocationCreateCell
