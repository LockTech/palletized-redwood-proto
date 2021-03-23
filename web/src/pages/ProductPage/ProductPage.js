import { Link, routes } from '@redwoodjs/router'

const ProductPage = () => {
  return (
    <>
      <h1>ProductPage</h1>
      <p>
        Find me in <code>./web/src/pages/ProductPage/ProductPage.js</code>
      </p>
      <p>
        My default route is named <code>product</code>, link to me with `
        <Link to={routes.product()}>Product</Link>`
      </p>
    </>
  )
}

export default ProductPage
