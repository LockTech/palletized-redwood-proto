import { Link, routes } from '@redwoodjs/router'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import OrderCountCell from 'src/components/order/OrderCountCell/OrderCountCell'
import PalletCountCell from 'src/components/pallet/PalletCountCell/PalletCountCell'

const countContainerClasses = 'd-flex flex-direction-row'

const WarehouseList = ({ warehouses }) => {
  return (
    <Row className="flex-wrap">
      {warehouses.map((warehouse, index) => (
        <Col className="mb-4" sm={12} md={4} key={index}>
          <Card>
            <Card.Body>
              <Card.Title>{warehouse.name}</Card.Title>
              <Card.Text className={countContainerClasses}>
                <strong>Active Orders:&nbsp;</strong>
                <OrderCountCell
                  order={{
                    pallets: { location: { warehouseId: warehouse.id } },
                  }}
                />
              </Card.Text>
              <Card.Text className={countContainerClasses}>
                <strong>Active Orders:&nbsp;</strong>
                <PalletCountCell
                  pallet={{ location: { warehouseId: warehouse.id } }}
                />
              </Card.Text>
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
