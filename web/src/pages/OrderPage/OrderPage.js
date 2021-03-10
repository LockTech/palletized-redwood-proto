import Alert from 'react-bootstrap/Alert'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import DashLayout from 'src/layouts/DashLayout'
import OrderDetailsCell from 'src/components/order/OrderDetailsCell'
import OrderNameCell from 'src/components/order/OrderNameCell'
import ActivePalletCountCell from 'src/components/pallet/ActivePalletCountCell'

const OrderPage = ({ id }) => {
  return (
    <DashLayout>
      <Container className="palletized-container">
        <Row>
          <Col>
            <h1>Order Details</h1>
            <p className="text-muted">
              Detailed overview of the current status of an Order.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Alert className="details-alert-container" variant="info">
              You are currently viewing details for Order Number:&nbsp;
              <strong>
                <OrderNameCell id={id} />
              </strong>
              .
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3">
            <ActivePalletCountCell id={id} />
          </Col>
        </Row>
        <Row>
          <Col>
            <OrderDetailsCell id={id} />
          </Col>
        </Row>
      </Container>
    </DashLayout>
  )
}

export default OrderPage
