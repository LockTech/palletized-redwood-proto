import { useEffect } from 'react'
import { navigate, routes } from '@redwoodjs/router'
import { useFlash, useMutation } from '@redwoodjs/web'
import Card from 'react-bootstrap/Card'

import LoadingCard from 'src/components/LoadingCard'
import OrderForm from 'src/components/order/OrderForm'

export const QUERY = gql`
  query FindOrderById($id: String!) {
    order(id: $id) {
      id
      orderNumber
      jobName
    }
  }
`

const UPDATE_ORDER_MUTATION = gql`
  mutation UpdateOrderMutation($id: String!, $input: UpdateOrderInput!) {
    updateOrder(id: $id, input: $input) {
      id
      orderNumber
      jobName
    }
  }
`

export const Loading = () => <LoadingCard />

const EmptyFail = ({ id }) => {
  const { addMessage } = useFlash()

  useEffect(() => {
    addMessage(`Could not find Order: ${id}.`, {
      variant: 'danger',
    })
  }, [addMessage, id])

  return (
    <Card>
      <Card.Body>Could not find Order: {id}.</Card.Body>
    </Card>
  )
}
export const Empty = EmptyFail
export const Failure = EmptyFail

export const Success = ({ order }) => {
  const { addMessage } = useFlash()
  const [updateOrder, { loading, error }] = useMutation(UPDATE_ORDER_MUTATION, {
    onCompleted: () => {
      navigate(routes.orders())
      addMessage('Order has been successfully updated.', {
        variant: 'success',
      })
    },
  })

  const onSave = (input, id) => {
    updateOrder({ variables: { id, input } })
  }

  return (
    <Card>
      <Card.Body>
        <OrderForm
          onSave={onSave}
          resultError={error}
          resultLoading={loading}
          order={order}
        />
      </Card.Body>
    </Card>
  )
}
