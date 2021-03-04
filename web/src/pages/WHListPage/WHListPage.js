import { Link, routes } from '@redwoodjs/router'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import DashLayout from 'src/layouts/DashLayout/DashLayout'
import WarehouseListCell from 'src/components/WarehouseListCell'

const WHListPage = () => {
  return (
    <DashLayout>
      <Container className="palletized-container">
        <Row>
          <Col>
            <h1>Warehouses</h1>
            <p className="text-muted">
              Geographically distinct areas for storing Pallets.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              as={Link}
              block
              className="mb-3"
              to={routes.newWarehouse()}
              variant="primary"
            >
              Create New Warehouse
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <WarehouseListCell />
          </Col>
        </Row>
      </Container>
    </DashLayout>
  )
}

export default WHListPage
