import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import DashLayout from 'src/layouts/DashLayout/DashLayout'
import ActiveOrderCountCell from 'src/components/ActiveOrderCountCell'
import UpcomingOrderCountCell from 'src/components/UpcomingOrderCountCell'

const DashboardPage = () => {
  return (
    <DashLayout>
      <Container className="palletized-container">
        <Row>
          <Col>
            <h1>Dashboard</h1>
            <p className="text-muted">
              A quick overview of the Jobs, Orders, and Pallets at:{' '}
              <strong>Charleston</strong>
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} className="mb-3 mb-md-0">
            <ActiveOrderCountCell id="064b12ba-468d-4c29-b852-b1a5ced654c0" />
          </Col>
          <Col sm={12} md={6} className="mb-3 mb-md-0">
            <UpcomingOrderCountCell id="064b12ba-468d-4c29-b852-b1a5ced654c0" />
          </Col>
        </Row>
      </Container>
    </DashLayout>
  )
}

export default DashboardPage
