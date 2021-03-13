import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'

import {
  Loading as LLoading,
  Success as LSuccess,
} from 'src/components/order/OrderListCell'

export const QUERY = gql`
  query ACTIVE_ORDERS($warehouseId: String!) {
    orders(warehouseId: $warehouseId) {
      id
      orderNumber
      jobName
      updatedAt
      createdAt
    }
  }
`

export const Loading = LLoading

export const Empty = () => (
  <Card>
    <Card.Body>
      <Card.Title>No Active Orders Found</Card.Title>
      <Card.Text>
        Your Selected Warehouse does not have any Orders with Pallets tagged to
        them.
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
        <Card.Title>No Active Orders Found</Card.Title>
        <Card.Text>
          Your Selected Warehouse does not have any Orders with Pallets tagged
          to them.
        </Card.Text>
      </Card.Body>
    </Card>
  </>
)

export const Success = LSuccess
