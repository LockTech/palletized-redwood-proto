import { Link, routes } from '@redwoodjs/router'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import DashLayout from 'src/layouts/DashLayout/DashLayout'
import ActiveOrderCountCell from 'src/components/ActiveOrderCountCell'
import UpcomingOrderCountCell from 'src/components/UpcomingOrderCountCell'
import WarehouseDetailsCell from 'src/components/WarehouseDetailsCell'
import WarehouseNameCell from 'src/components/WarehouseNameCell'

import './WHPage.css'

const WHPage = ({ id }) => {
  return (
    <DashLayout>
      <Container className="palletized-container">
        <Row>
          <Col>
            <h1>Warehouse Details</h1>
            <p className="text-muted">
              A detailed overview of the current status of a Warehouse.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Alert className="whpage-alert-container" variant="info">
              You are currently viewing details for:&nbsp;
              <strong>
                <WarehouseNameCell id={id} />
              </strong>
            </Alert>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            {/* CHECK FOR ACTIVE WAREHOUSE BEING THIS ONE */}
            <Button block variant="primary">
              Switch to Warehouse
            </Button>
            <Button
              as={Link}
              block
              to={routes.editWarehouse({ id })}
              variant="outline-secondary"
            >
              Edit Warehouse
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3" xs={12} md={6}>
            <ActiveOrderCountCell id={id} />
          </Col>
          <Col className="mb-3" xs={12} md={6}>
            <UpcomingOrderCountCell id={id} />
          </Col>
        </Row>
        <Row>
          <Col className="mb-3" md={8}>
            <WarehouseDetailsCell id={id} />
          </Col>
          <Col className="mb-3" md={4}>
            <Card>
              <Card.Header>Actions</Card.Header>
              <Card.Body>
                I will be a bunch of actions you can take on a warehouse.
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </DashLayout>
  )
}

export default WHPage
