import { useMutation, useFlash } from '@redwoodjs/web'
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
  const { addMessage } = useFlash()
  const [createOrder, { loading, error }] = useMutation(ORDER_CREATE_MUTATION, {
    onCompleted: () => {
      navigate(routes.orders())
      addMessage('Order created.', { variant: 'success' })
    },
  })

  const onSave = (input) => {
    try {
      createOrder({ variables: { input } })
    } catch (err) {
      // console.log(err)
    }
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
