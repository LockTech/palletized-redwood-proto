import { Link, routes } from '@redwoodjs/router'

const OrderEditPage = () => {
  return (
    <>
      <h1>OrderEditPage</h1>
      <p>
        Find me in <code>./web/src/pages/OrderEditPage/OrderEditPage.js</code>
      </p>
      <p>
        My default route is named <code>orderEdit</code>, link to me with `
        <Link to={routes.orderEdit()}>OrderEdit</Link>`
      </p>
    </>
  )
}

export default OrderEditPage
