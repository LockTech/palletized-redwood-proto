import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import Card from 'react-bootstrap/Card'

import OrderForm from 'src/components/order/OrderForm'

export const ORDER_CREATE_MUTATION = gql`
  mutation OrderCreateMutation($input: CreateOrderInput!) {
    createOrder(input: $input) {
      id
    }
  }
`

const OrderCreateCell = () => {
  const [createOrder, { loading, error }] = useMutation(ORDER_CREATE_MUTATION, {
    onCompleted: () => {
      navigate(routes.orders())
      toast.success('Order successfully created.')
    },
  })

  const onSave = (input) => {
    createOrder({ variables: { input } })
  }

  return (
    <Card>
      <Card.Body>
        <OrderForm
          onSave={onSave}
          resultError={error}
          resultLoading={loading}
        />
      </Card.Body>
    </Card>
  )
}

export default OrderCreateCell
