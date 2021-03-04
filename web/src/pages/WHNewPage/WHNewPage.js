import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import DashLayout from 'src/layouts/DashLayout/DashLayout'
import NewWarehouseCell from 'src/components/WarehouseNewCell'

const WHNewPage = () => {
  return (
    <DashLayout>
      <Container className="palletized-container">
        <Row>
          <Col>
            <h1>New Warehouse</h1>
            <p className="text-muted">
              Create a new Warehouse accessible by all members of your
              organization.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <NewWarehouseCell />
          </Col>
        </Row>
      </Container>
    </DashLayout>
  )
}

export default WHNewPage
