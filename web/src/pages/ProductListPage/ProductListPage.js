import { Link, routes } from '@redwoodjs/router'
import Button from 'react-bootstrap/Button'
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
            <h1>Products</h1>
            <p className="text-muted">
              A list of Products, accessible across your organization, that can
              be tagged to Pallets.
            </p>
          </Col>
        </Row>
      </Container>
    </DashLayout>
  )
}

export default ProductListPage
