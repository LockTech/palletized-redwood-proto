import { Link, routes } from '@redwoodjs/router'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import DashLayout from 'src/layouts/DashLayout/DashLayout'
import WarehouseDeleteCell from 'src/components/warehouse/WarehouseDeleteCell'
import ActiveOrderTile from 'src/components/order/ActiveOrderTile'
import UpcomingOrderTile from 'src/components/order/UpcomingOrderTile'
import WarehouseDetailsCell from 'src/components/warehouse/WarehouseDetailsCell'
import WarehouseNameCell from 'src/components/warehouse/WarehouseNameCell'

const WHPage = ({ id }) => {
  return (
    <DashLayout>
      <Container className="palletized-container">
        <Row>
          <Col>
            <h1>Warehouse Details</h1>
            <p className="text-muted">
              A detailed overview of a Warehouse&apos;s Pallets, Orders, and
              Locations.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Alert className="details-alert-container" variant="info">
              You are currently viewing details for Warehouse:&nbsp;
              <strong>
                <WarehouseNameCell id={id} />
              </strong>
              .
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3">
            <Button block variant="primary">
              Switch to Warehouse
            </Button>
            <Button
              as={Link}
              block
              to={routes.editWarehouse({ id })}
              variant="outline-secondary"
            >
              Edit
            </Button>
          </Col>
          <Col className="mb-3">
            <WarehouseDeleteCell id={id} />
          </Col>
        </Row>
        <Row>
          <Col className="mb-3" xs={12} md={6}>
            <ActiveOrderTile
              order={{ pallets: { location: { warehouseId: id } } }}
            />
          </Col>
          <Col className="mb-3" xs={12} md={6}>
            <UpcomingOrderTile
              order={{ pallets: { location: { warehouseId: id } } }}
            />
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
