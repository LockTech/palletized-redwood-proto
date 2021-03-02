import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import DashLayout from 'src/layouts/DashLayout/DashLayout'
import NewWarehouseCell from 'src/components/NewWarehouseCell'
import WarehouseForm from 'src/components/WarehouseForm/WarehouseForm'

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
            <Card>
              <Card.Body>
                <NewWarehouseCell
                  render={(onSave, loading, error) => (
                    <WarehouseForm
                      onSave={onSave}
                      resultError={error}
                      resultLoading={loading}
                    />
                  )}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </DashLayout>
  )
}

export default WHNewPage
