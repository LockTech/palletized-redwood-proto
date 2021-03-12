import { Link, routes } from '@redwoodjs/router'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

import LocaleTime from 'src/components/LocaleTime'
import WarehouseDeleteCell from '../WarehouseDeleteCell/WarehouseDeleteCell'

const WarehouseList = ({ warehouses }) => {
  return (
    <CardColumns>
      {warehouses.map((warehouse, index) => (
        <Card key={index}>
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
            <WarehouseDeleteCell id={warehouse.id} />
          </Card.Body>
        </Card>
      ))}
    </CardColumns>
  )
}

export default WarehouseList
