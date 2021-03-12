import { Link, routes } from '@redwoodjs/router'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

import OrderDeleteCell from 'src/components/order/OrderDeleteCell'

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
            <OrderDeleteCell id={order.id} />
          </Card.Body>
        </Card>
      ))}
    </CardColumns>
  )
}

export default OrderList
