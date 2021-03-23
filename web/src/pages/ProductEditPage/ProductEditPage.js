import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import DashLayout from 'src/layouts/DashLayout/DashLayout'
import ProductEditCell from 'src/components/product/ProductEditCell/ProductEditCell'

const ProductEditPage = ({ id }) => {
  return (
    <DashLayout>
      <Container className="palletized-container">
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <ProductEditCell id={id} />
          </Col>
        </Row>
      </Container>
    </DashLayout>
  )
}

export default ProductEditPage
