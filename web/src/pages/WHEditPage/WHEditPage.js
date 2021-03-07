import Alert from 'react-bootstrap/Alert'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import DashLayout from 'src/layouts/DashLayout/DashLayout'
import WarehouseEditCell from 'src/components/WarehouseEditCell'
import WarehouseNameCell from 'src/components/WarehouseNameCell'

const WHEditPage = ({ id }) => {
  return (
    <DashLayout>
      <Container className="palletized-container">
        <Row>
          <Col>
            <h1>Edit Warehouse</h1>
            <p className="text-muted">
              Alter the details of a Warehouse managed by your organization.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Alert variant="info">
              You are currently editing the{' '}
              <strong>
                <WarehouseNameCell id={id} />
              </strong>{' '}
              Warehouse.
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col>
            <WarehouseEditCell id={id} />
          </Col>
        </Row>
      </Container>
    </DashLayout>
  )
}

export default WHEditPage
