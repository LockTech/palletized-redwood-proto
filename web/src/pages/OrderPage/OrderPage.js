import DashLayout from 'src/layouts/DashLayout'
import OrderCell from 'src/components/OrderCell'

const OrderPage = ({ id }) => {
  return (
    <DashLayout>
      <OrderCell id={id} />
    </DashLayout>
  )
}

export default OrderPage
