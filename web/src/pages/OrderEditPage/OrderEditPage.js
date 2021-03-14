import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import DashLayout from 'src/layouts/DashLayout'
import OrderEditCell from 'src/components/order/OrderEditCell'

const OrderEditPage = ({ id }) => {
  return (
    <DashLayout>
      <Container className="palletized-container">
        <Row>
          <Col>
            <h1>Edit Order</h1>
            <p className="text-muted">
              Alter the details for an existing Order.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <OrderEditCell id={id} />
          </Col>
        </Row>
      </Container>
    </DashLayout>
  )
}

export default OrderEditPage
