import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'

import LoadingCard from 'src/components/LoadingCard'
import OrderList from 'src/components/order/OrderList'

export const QUERY = gql`
  query ORDERS {
    orders {
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
      <Card.Title>No Orders Found</Card.Title>
      <Card.Text>
        You do not have any Orders configured for your organization.
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
        <Card.Title>No Orders Found</Card.Title>
        <Card.Text>
          You do not have any Orders configured for your organization.
        </Card.Text>
      </Card.Body>
    </Card>
  </>
)

export const Success = ({ orders }) => <OrderList orders={orders} />
