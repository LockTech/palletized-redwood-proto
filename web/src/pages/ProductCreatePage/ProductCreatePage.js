import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import DashLayout from 'src/layouts/DashLayout'

import ProductCreateCell from 'src/components/product/ProductCreateCell'

const ProductCreatePage = () => {
  return (
    <DashLayout>
      <Container className="palletized-container">
        <Row>
          <Col>
            <h1>Create Product</h1>
            <p className="text-muted">
              Create a new Product which can be tagged to any Pallet in your
              organization.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProductCreateCell />
          </Col>
        </Row>
      </Container>
    </DashLayout>
  )
}

export default ProductCreatePage
