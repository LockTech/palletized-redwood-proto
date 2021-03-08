import { Link, routes } from '@redwoodjs/router'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import DashLayout from 'src/layouts/DashLayout'

const OrderEditPage = ({ id }) => {
  return (
    <DashLayout>
      <Container className="palletized-container">
        <Row>
          <Col>
            <h1>Edit Order</h1>
            <p>{id}</p>
          </Col>
        </Row>
      </Container>
    </DashLayout>
  )
}

export default OrderEditPage
