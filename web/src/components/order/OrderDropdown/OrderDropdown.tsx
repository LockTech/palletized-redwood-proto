import { useMemo } from 'react'
import { routes, useMatch } from '@redwoodjs/router'
import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav'

import NavDropdown from 'src/components/NavDropdown/NavDropdown'

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
        <NavDropdown active={createOrderMatch} to={createOrderRoute}>
          Create Order
        </NavDropdown>
        <NavDropdown active={ordersMatch} to={ordersRoute}>
          List Orders
        </NavDropdown>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default OrderDropdown
