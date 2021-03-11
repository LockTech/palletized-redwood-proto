import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import DashLayout from 'src/layouts/DashLayout/DashLayout'
import LocationCreateCell from 'src/components/location/LocationCreateCell'

const LocationCreatePage = () => {
  return (
    <DashLayout>
      <Container className="palletized-container">
        <Row>
          <Col>
            <h1>Create Location</h1>
            <p className="text-muted">
              Create a new Location which can have Pallets tagged to it.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <LocationCreateCell />
          </Col>
        </Row>
      </Container>
    </DashLayout>
  )
}

export default LocationCreatePage
