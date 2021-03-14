import { useEffect } from 'react'
import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import Card from 'react-bootstrap/Card'

import LoadingCard from 'src/components/LoadingCard'
import OrderForm from 'src/components/order/OrderForm'
import OrderNameCell from 'src/components/order/OrderNameCell'
import OrderTooltip from '../OrderTooltip/OrderTooltip'

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

const commonHeader = (id) => (
  <Card.Header className="d-flex flex-direction-row align-items-center justify-content-between">
    <span>
      Editing Order:&nbsp;
      <strong>
        <OrderNameCell id={id} />
      </strong>
    </span>
    <OrderTooltip />
  </Card.Header>
)

export const Loading = () => <LoadingCard />

export const Empty = ({ id }) => {
  useEffect(() => {
    toast.error(`Could not find Order: ${id}.`)
  }, [id])

  return (
    <Card>
      {commonHeader(id)}
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
      {commonHeader(id)}
      <Card.Body>An error occured while trying to edit the Order.</Card.Body>
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
      {commonHeader(order.id)}
      <Card.Body>
        <OrderForm
          onSave={onSave}
          error={error}
          loading={loading}
          order={order}
        />
      </Card.Body>
    </Card>
  )
}
