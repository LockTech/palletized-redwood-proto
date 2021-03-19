import { useCallback, useMemo } from 'react'
import { Link, navigate, routes } from '@redwoodjs/router'
import { useRecoilValue } from '@salvoravida/recoil'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import DefaultWarehouseAtom from 'src/atoms/DefaultWarehouseAtom/DefaultWarehouseAtom'

import DashLayout from 'src/layouts/DashLayout/DashLayout'
import SwitchWarehouseForm from 'src/components/warehouse/SwitchWarehouseForm/SwitchWarehouseForm'
import OrderListCell from 'src/components/order/OrderListCell/OrderListCell'

const OrderListPage = ({ active = true }) => {
  const isActive = useMemo(() => JSON.parse(active), [active])

  const toggleActive = useCallback((active) => {
    navigate(routes.orders({ active }))
  }, [])

  const defaultWarehouse = useRecoilValue(DefaultWarehouseAtom)

  return (
    <DashLayout>
      <Container className="palletized-container">
        <Row>
          <Col>
            <h1>Orders</h1>
            <p className="text-muted">
              A list of the Orders which can be used across your organization.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3">
            <Button as={Link} block to={routes.createOrder()}>
              Create New Order
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3">
            <Card>
              <Card.Body>
                <SwitchWarehouseForm
                  isActive={isActive}
                  name="Orders"
                  onClick={() => null}
                  onToggleActive={toggleActive}
                  resourceName="Orders"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <OrderListCell
              warehouseId={isActive ? defaultWarehouse.id : null}
            />
          </Col>
        </Row>
      </Container>
    </DashLayout>
  )
}

export default OrderListPage
