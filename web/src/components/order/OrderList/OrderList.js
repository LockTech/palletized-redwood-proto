import { Link, routes } from '@redwoodjs/router'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

import PalletCountCell from 'src/components/pallet/PalletCountCell'

const OrderList = ({ orders }) => {
  return (
    <CardColumns>
      {orders.map((order, index) => (
        <Card key={index}>
          <Card.Body>
            <Card.Title>{order.jobName || order.orderNumber}</Card.Title>
            <Card.Subtitle className="mb-3 text-muted">
              {order.jobName ? order.orderNumber : 'No Job-Name Specified'}
            </Card.Subtitle>
            <Card.Text className="d-flex flex-direction-row justify-content-between">
              <strong>
                Pallets in <em>Selected Warehouse</em>:
              </strong>
              <PalletCountCell
                pallet={{
                  orderId: order.id,
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
      ))}
    </CardColumns>
  )
}

export default OrderList
