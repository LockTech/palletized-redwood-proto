import { Link, routes } from '@redwoodjs/router'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import DashLayout from 'src/layouts/DashLayout/DashLayout'

import LocationNameCell from 'src/components/location/LocationNameCell/LocationNameCell'
import LocationDeleteCell from 'src/components/location/LocationDeleteCell/LocationDeleteCell'
import ActiveOrderTile from 'src/components/order/ActiveOrderTile/ActiveOrderTile'
import ActivePalletTile from 'src/components/pallet/ActivePalletTile/ActivePalletTile'

const LocationPage = ({ id, warehouse }) => {
  return (
    <DashLayout>
      <Container className="palletized-container">
        <Row>
          <Col>
            <h1>Location Details</h1>
            <p className="text-muted">
              A detailed overview of a Location&apos;s current-status.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Alert variant="info">
              You are currently viewing details for Location:&nbsp;
              <strong>
                <LocationNameCell id={id} />
              </strong>
              .
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3" xs={12}>
            <Button
              as={Link}
              block
              to={routes.editLocation({ id })}
              variant="outline-primary"
            >
              Edit Location
            </Button>
          </Col>
          <Col className="mb-3" xs={12}>
            <LocationDeleteCell id={id} warehouseId={warehouse} />
          </Col>
        </Row>
        <Row>
          <Col className="mb-3" xs={12} md={6}>
            <ActiveOrderTile order={{ pallets: { locationId: id } }} />
          </Col>
          <Col className="mb-3" xs={12} md={6}>
            <ActivePalletTile pallet={{ locationId: id }} />
          </Col>
        </Row>
      </Container>
    </DashLayout>
  )
}

export default LocationPage
