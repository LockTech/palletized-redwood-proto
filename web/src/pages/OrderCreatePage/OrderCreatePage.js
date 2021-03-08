import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import DashLayout from 'src/layouts/DashLayout'
import OrderCreateCell from 'src/components/order/OrderCreateCell'

const OrderCreatePage = () => {
  return (
    <DashLayout>
      <Container className="palletized-container">
        <Row>
          <Col>
            <h1>Create Order</h1>
            <p className="text-muted">
              Create a new Order which can be used accross all Warehouses in
              your organization.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <OrderCreateCell />
          </Col>
        </Row>
      </Container>
    </DashLayout>
  )
}

export default OrderCreatePage
