import { Link, routes } from '@redwoodjs/router'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import LocaleTime from 'src/components/LocaleTime/LocaleTime'

const WarehouseList = ({ warehouses }) => {
  return (
    <Row className="flex-wrap">
      {warehouses.map((warehouse, index) => (
        <Col className="mb-4" sm={12} md={4} key={index}>
          <Card>
            <Card.Body>
              <Card.Title>{warehouse.name}</Card.Title>
              <Card.Subtitle className="d-flex align-items-center mb-3 text-muted">
                <strong>Date Created:</strong>
                &nbsp;
                <LocaleTime datetime={warehouse.createdAt} />
              </Card.Subtitle>
              <Card.Subtitle className="d-flex align-items-center mb-3 text-muted">
                <strong>Last Updated:</strong>
                &nbsp;
                <LocaleTime datetime={warehouse.updatedAt} />
              </Card.Subtitle>
              <Button
                as={Link}
                block
                className="mb-2"
                to={routes.warehouse({ id: warehouse.id })}
                variant="outline-primary"
              >
                Details
              </Button>
              <Button
                as={Link}
                block
                to={routes.editWarehouse({ id: warehouse.id })}
                variant="outline-secondary"
              >
                Edit
              </Button>
              <Button
                as={Link}
                block
                to={routes.warehouse({ id: warehouse.id })}
                variant="outline-secondary"
              >
                Switch to Warehouse
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default WarehouseList
