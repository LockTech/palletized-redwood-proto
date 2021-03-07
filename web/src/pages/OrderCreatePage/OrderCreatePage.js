import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import DashLayout from 'src/layouts/DashLayout'
import OrderCreateCell from 'src/components/OrderCreateCell'

const OrderCreatePage = () => {
  return (
    <DashLayout>
      <Container className="palletized-container">
        <Row>
          <Col>
            <h1>New Order</h1>
            <p className="text-muted"></p>
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
