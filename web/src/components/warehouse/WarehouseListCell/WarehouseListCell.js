import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'

import LoadingCard from 'src/components/LoadingCard/LoadingCard'
import WarehouseList from 'src/components/warehouse/WarehouseList/WarehouseList'

export const QUERY = gql`
  query WAREHOUSES {
    warehouses {
      id
      name
    }
  }
`

export const Loading = () => <LoadingCard />

export const Empty = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>No Warehouses Found</Card.Title>
        <Card.Text>
          You do not have any Warehouses configured for your organization.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export const Failure = ({ error }) => (
  <>
    <Alert variant="danger">
      <p>{error.message}</p>
    </Alert>
    <Card>
      <Card.Body>
        <Card.Title>No Warehouses Found</Card.Title>
        <Card.Text>
          You do not have any Warehouses configured for your organization.
        </Card.Text>
      </Card.Body>
    </Card>
  </>
)

export const Success = ({ warehouses }) => (
  <WarehouseList warehouses={warehouses} />
)
