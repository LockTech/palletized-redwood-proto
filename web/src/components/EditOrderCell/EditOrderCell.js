import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import OrderForm from 'src/components/OrderForm'

export const QUERY = gql`
  query FIND_ORDER_BY_ID($id: String!) {
    order: order(id: $id) {
      id
      name
      updatedAt
      createdAt
    }
  }
`
const UPDATE_ORDER_MUTATION = gql`
  mutation UpdateOrderMutation($id: String!, $input: UpdateOrderInput!) {
    updateOrder(id: $id, input: $input) {
      id
      name
      updatedAt
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ order }) => {
  const { addMessage } = useFlash()
  const [updateOrder, { loading, error }] = useMutation(UPDATE_ORDER_MUTATION, {
    onCompleted: () => {
      navigate(routes.orders())
      addMessage('Order updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updateOrder({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Order {order.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <OrderForm
          order={order}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
