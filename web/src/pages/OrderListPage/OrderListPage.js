import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import DashLayout from 'src/layouts/DashLayout'
import OrderListCell from 'src/components/order/OrderListCell'

const OrderListPage = () => {
  return (
    <DashLayout>
      <Container className="palletized-container">
        <Row>
          <Col>
            <h1>Orders</h1>
            <p className="text-muted"></p>
          </Col>
        </Row>
        <Row>
          <Col>
            <OrderListCell />
          </Col>
        </Row>
      </Container>
    </DashLayout>
  )
}

export default OrderListPage
