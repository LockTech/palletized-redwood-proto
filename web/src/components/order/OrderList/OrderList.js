import { Link, routes } from '@redwoodjs/router'
import { useRecoilValue } from '@salvoravida/recoil'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import DefaultWarehouseAtom from 'src/atoms/DefaultWarehouseAtom/DefaultWarehouseAtom'

import PalletCountCell from 'src/components/pallet/PalletCountCell/PalletCountCell'

const OrderList = ({ orders }) => {
  const defaultWarehouse = useRecoilValue(DefaultWarehouseAtom)

  return (
    <Row className="flex-wrap">
      {orders.map((order, index) => (
        <Col className="mb-4" sm={12} md={4} key={index}>
          <Card>
            <Card.Body>
              <Card.Title>{order.jobName || order.orderNumber}</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">
                {order.jobName ? order.orderNumber : 'No Job-Name Specified'}
              </Card.Subtitle>
              <Card.Text className="d-flex flex-direction-row justify-content-between">
                <strong>Pallets in Selected Warehouse:</strong>
                <PalletCountCell
                  pallet={{
                    orderId: order.id,
                    location: {
                      warehouseId: defaultWarehouse.id,
                    },
                  }}
                />
              </Card.Text>
              <Button
                as={Link}
                block
                to={routes.order({ id: order.id })}
                variant="outline-primary"
              >
                Details
              </Button>
              <Button
                as={Link}
                block
                to={routes.editOrder({ id: order.id })}
                variant="outline-secondary"
              >
                Edit
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default OrderList
