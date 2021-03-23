import { Link, routes } from '@redwoodjs/router'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import DashLayout from 'src/layouts/DashLayout/DashLayout'
import ProductListCell from 'src/components/product/ProductListCell/ProductListCell'

const ProductListPage = () => {
  return (
    <DashLayout>
      <Container className="palletized-container">
        <Row>
          <Col>
            <h1>Products</h1>
            <p className="text-muted">
              A list of Products, accessible across your organization, that can
              be tagged to Pallets.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3">
            <Button
              as={Link}
              block
              to={routes.createProduct()}
              variant="primary"
            >
              Create New Product
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProductListCell />
          </Col>
        </Row>
      </Container>
    </DashLayout>
  )
}

export default ProductListPage
