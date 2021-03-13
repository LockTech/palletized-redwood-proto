import { Link, routes } from '@redwoodjs/router'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import DashLayout from 'src/layouts/DashLayout'

const ProductListPage = () => {
  return (
    <DashLayout>
      <Container className="palletized-container">
        <Row>
          <Col>
            <h1>ProductListPage</h1>
            <p>
              Find me in{' '}
              <code>./web/src/pages/ProductListPage/ProductListPage.js</code>
            </p>
            <p>
              My default route is named <code>productList</code>, link to me
              with `<Link to={routes.products()}>ProductList</Link>`
            </p>
          </Col>
        </Row>
      </Container>
    </DashLayout>
  )
}

export default ProductListPage
