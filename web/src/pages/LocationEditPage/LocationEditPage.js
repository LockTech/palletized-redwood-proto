import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import DashLayout from 'src/layouts/DashLayout/DashLayout'

import LocationEditCell from 'src/components/location/LocationEditCell/LocationEditCell'

const LocationEditPage = ({ id }) => {
  return (
    <DashLayout>
      <Container className="palletized-container">
        <Row>
          <Col>
            <h1>Edit Location</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <LocationEditCell id={id} />
          </Col>
        </Row>
      </Container>
    </DashLayout>
  )
}

export default LocationEditPage
