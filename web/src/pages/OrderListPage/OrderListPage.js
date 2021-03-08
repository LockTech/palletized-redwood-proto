import { useMemo } from 'react'
import { Link, routes } from '@redwoodjs/router'
import { useForm } from 'react-hook-form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

import DashLayout from 'src/layouts/DashLayout'
import ActiveOrderListCell from 'src/components/order/ActiveOrderListCell'
import OrderListCell from 'src/components/order/OrderListCell'

const OrderListPage = ({ active }) => {
  const parsedActive = useMemo(() => JSON.parse(active), [active])

  const { register, watch } = useForm({
    mode: 'onChange',
    defaultValues: {
      selectedWarehouses: parsedActive || false,
    },
  })

  const watchSelectedWarehouses = watch(
    'selectedWarehouses',
    parsedActive || false
  )

  return (
    <DashLayout>
      <Container className="palletized-container">
        <Row>
          <Col>
            <h1>Orders</h1>
            <p className="text-muted">
              A list of Orders which Pallets can be tagged to.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3">
            <Button as={Link} block to={routes.createOrder()}>
              Create Order
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3">
            <Card>
              <Card.Body>
                <Form.Check
                  ref={register()}
                  className={watchSelectedWarehouses && 'mb-3'}
                  id="selectedWarehouses"
                  label={
                    <span>
                      Only include Orders which are <em>active</em> at your
                      Selected Warehouse.
                    </span>
                  }
                  name="selectedWarehouses"
                  type="checkbox"
                />
                {watchSelectedWarehouses && (
                  <Button
                    as={Link}
                    block
                    to={routes.warehouses()}
                    variant="outline-primary"
                  >
                    Switch Warehouse
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            {watchSelectedWarehouses ? (
              <ActiveOrderListCell warehouseId="charleston" />
            ) : (
              <OrderListCell />
            )}
          </Col>
        </Row>
      </Container>
    </DashLayout>
  )
}

OrderListPage.defaultProps = {
  active: true,
}

export default OrderListPage
