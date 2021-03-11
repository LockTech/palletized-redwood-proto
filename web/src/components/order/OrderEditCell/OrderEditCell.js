import { useEffect } from 'react'
import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
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

export const Empty = ({ id }) => {
  useEffect(() => {
    toast.error(`Could not find Order: ${id}.`)
  }, [id])

  return (
    <Card>
      <Card.Body>Could not find Order: {id}.</Card.Body>
    </Card>
  )
}

export const Failure = ({ id }) => {
  useEffect(() => {
    toast.error(`An error occured while trying to edit Order: ${id}.`)
  }, [id])

  return (
    <Card>
      <Card.Body>An error occured while trying to edit Order: {id}.</Card.Body>
    </Card>
  )
}

export const Success = ({ order }) => {
  const [updateOrder, { loading, error }] = useMutation(UPDATE_ORDER_MUTATION, {
    onCompleted: () => {
      navigate(routes.orders())
      toast.success('Order has been successfully updated.')
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
