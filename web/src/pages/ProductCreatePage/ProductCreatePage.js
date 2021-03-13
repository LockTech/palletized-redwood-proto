import { Link, routes } from '@redwoodjs/router'

const ProductCreatePage = () => {
  return (
    <>
      <h1>ProductCreatePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/ProductCreatePage/ProductCreatePage.js</code>
      </p>
      <p>
        My default route is named <code>productCreate</code>, link to me with `
        <Link to={routes.productCreate()}>ProductCreate</Link>`
      </p>
    </>
  )
}

export default ProductCreatePage
