import Card from 'react-bootstrap/Card'

import LoadingCard from 'src/components/LoadingCard'
import OrderList from 'src/components/order/OrderList'

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

export const Loading = () => <LoadingCard />

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

export const Success = ({ orders }) => <OrderList orders={orders} />
