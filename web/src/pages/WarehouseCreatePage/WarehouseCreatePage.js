import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import DashLayout from 'src/layouts/DashLayout/DashLayout'
import WarehouseCreateCell from 'src/components/WarehouseCreateCell'

const WarehouseCreatePage = () => {
  return (
    <DashLayout>
      <Container className="palletized-container">
        <Row>
          <Col>
            <h1>Create Warehouse</h1>
            <p className="text-muted">
              Create a new Warehouse accessible by all members of your
              organization.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <WarehouseCreateCell />
          </Col>
        </Row>
      </Container>
    </DashLayout>
  )
}

export default WarehouseCreatePage
