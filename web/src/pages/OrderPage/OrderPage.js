import { Link, routes } from '@redwoodjs/router'

const OrderPage = () => {
  return (
    <>
      <h1>OrderPage</h1>
      <p>
        Find me in <code>./web/src/pages/OrderPage/OrderPage.js</code>
      </p>
      <p>
        My default route is named <code>order</code>, link to me with `
        <Link to={routes.order()}>Order</Link>`
      </p>
    </>
  )
}

export default OrderPage
