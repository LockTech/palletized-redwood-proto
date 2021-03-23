import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'

import LoadingCard from 'src/components/LoadingCard'
import LocationList from 'src/components/location/LocationList'

export const QUERY = gql`
  query LocationListQuery($warehouseId: String = null) {
    locations(warehouseId: $warehouseId) {
      id
      name
      warehouse {
        id
        name
      }
    }
  }
`

export const Loading = () => <LoadingCard />

export const Empty = () => (
  <Card>
    <Card.Body>
      <Card.Title>No Locations Found</Card.Title>
      <Card.Text>
        You do not have any Locations configured for your organization.
      </Card.Text>
    </Card.Body>
  </Card>
)

export const Failure = ({ error }) => (
  <>
    <Alert variant="danger">
      <p>{error.message}</p>
    </Alert>
    <Card>
      <Card.Body>
        <Card.Title>No Locations Found</Card.Title>
        <Card.Text>
          You do not have any Locations configured for your organization.
        </Card.Text>
      </Card.Body>
    </Card>
  </>
)

export const Success = ({ locations }) => <LocationList locations={locations} />
