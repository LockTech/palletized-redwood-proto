import { useMemo } from 'react'
import { routes, useMatch } from '@redwoodjs/router'
import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav'

const OrderDropdown: React.FunctionComponent = () => {
  const createOrderRoute = useMemo(() => routes.createOrder(), [])
  const createOrderMatch = useMatch(createOrderRoute).match
  const ordersRoute = useMemo(() => routes.orders(), [])
  const ordersMatch = useMatch(ordersRoute).match

  return (
    <Dropdown>
      <Dropdown.Toggle
        as={Nav.Link}
        className={(ordersMatch || createOrderMatch) && 'active'}
      >
        Orders
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item className={ordersMatch && 'active'} href={ordersRoute}>
          Orders
        </Dropdown.Item>
        <Dropdown.Item
          className={createOrderMatch && 'active'}
          href={createOrderRoute}
        >
          Create Order
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default OrderDropdown
