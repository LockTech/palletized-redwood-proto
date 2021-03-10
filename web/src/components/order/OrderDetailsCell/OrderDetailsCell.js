import { useEffect } from 'react'
import { useFlash } from '@redwoodjs/web'
import Card from 'react-bootstrap/Card'

import LoadingCard from 'src/components/LoadingCard'
import OrderDetails from 'src/components/order/OrderDetails'

export const QUERY = gql`
  query OrderDetailsQuery($id: String!) {
    order(id: $id) {
      id
      orderNumber
      jobName
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <LoadingCard />

export const Empty = ({ id }) => {
  const { addMessage } = useFlash()

  useEffect(() => {
    addMessage(
      `Could not find details for Order: ${id}. Are you sure the Order exist?`,
      {
        skipTimeout: true,
        variant: 'danger',
      }
    )
  }, [addMessage, id])

  return (
    <Card>
      <Card.Header>Details</Card.Header>
      <Card.Body>
        <Card.Text>Could not find Order.</Card.Text>
      </Card.Body>
    </Card>
  )
}

export const Failure = ({ id }) => {
  const { addMessage } = useFlash()

  useEffect(() => {
    addMessage(
      `An error occured while retrieving the details for Order: ${id}`,
      {
        skipTimeout: true,
        variant: 'danger',
      }
    )
  }, [addMessage, id])

  return (
    <Card>
      <Card.Header>Details</Card.Header>
      <Card.Body>
        <Card.Text>
          An error occured while retrieving the details for Order: {id}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export const Success = ({ order }) => (
  <Card>
    <Card.Header>Details</Card.Header>
    <Card.Body>
      <OrderDetails order={order} />
    </Card.Body>
  </Card>
)
