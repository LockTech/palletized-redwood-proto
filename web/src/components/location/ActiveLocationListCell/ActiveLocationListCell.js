import Card from 'react-bootstrap/Card'

import LocationList from 'src/components/location/LocationList'
import {
  Loading as LLoading,
  Failure as LFailure,
} from 'src/components/location/LocationListCell'

export const QUERY = gql`
  query ACTIVE_LOCATIONS($warehouseId: String!) {
    locations(warehouseId: $warehouseId) {
      id
      name
      updatedAt
      createdAt
      warehouse {
        id
        name
      }
    }
  }
`

export const Loading = LLoading

export const Empty = () => (
  <Card>
    <Card.Body>
      <Card.Title>No Locations Found</Card.Title>
      <Card.Text>
        You do not have any Locations configured for the selected Warehouse.
      </Card.Text>
    </Card.Body>
  </Card>
)

export const Failure = LFailure

export const Success = ({ locations }) => (
  <LocationList locations={locations} relistQuery={QUERY} />
)
