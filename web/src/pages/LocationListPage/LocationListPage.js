import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import DashLayout from 'src/layouts/DashLayout/DashLayout'

const LocationListPage = () => {
  return (
    <DashLayout>
      <Container className="palletized-container">
        <Row>
          <Col>
            <h1>Locations</h1>
            <p className="text-muted">
              A list of the Locations which can be used when tagging Pallets to
              a Warehouse.
            </p>
          </Col>
        </Row>
      </Container>
    </DashLayout>
  )
}

export default LocationListPage
