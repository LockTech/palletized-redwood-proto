import { useMemo } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { BsPeopleCircle } from 'react-icons/bs'
import { Link, routes, useMatch } from '@redwoodjs/router'

import NavLink from 'src/components/common/NavLink'

import './DashLayout.css'

/**
 * Primary `Layout` for the Palletized application.
 *
 * Accepted Props:
 *
 * * `fluid` - can be used to remove margins and apply the `fluid` prop to the
 * underlying Bootstrap `<Container>` wrapping `children` content.
 */
const DashLayout = ({ children, fluid }) => {
  // Limit repetative code + useMatch for Bootstrap-compatible 'active' functionality.
  const warehousesRoute = useMemo(() => routes.warehouses(), [])
  const warehousesMatch = useMatch(warehousesRoute).match
  const locationsRoute = useMemo(() => routes.locations(), [])
  const locationsMatch = useMatch(locationsRoute).match
  const ordersRoute = useMemo(() => routes.orders(), [])
  const ordersMatch = useMatch(ordersRoute).match
  const palletsRoute = useMemo(() => routes.pallets(), [])
  const palletsMatch = useMatch(palletsRoute).match

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>
          <Link
            className="link-light text-decoration-none"
            to={routes.dashboard()}
          >
            Palletized
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <NavLink linkTo={routes.dashboard()}>Dashboard</NavLink>
            <Dropdown>
              <Dropdown.Toggle
                as={Nav.Link}
                className={(warehousesMatch || locationsMatch) && 'active'}
              >
                Warehouses
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  className={warehousesMatch && 'active'}
                  href={warehousesRoute}
                >
                  Warehouses
                </Dropdown.Item>
                <Dropdown.Item
                  className={locationsMatch && 'active'}
                  href={locationsRoute}
                >
                  Locations
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle
                as={Nav.Link}
                className={(ordersMatch || palletsMatch) && 'active'}
              >
                Order
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  className={ordersMatch && 'active'}
                  href={ordersRoute}
                >
                  Orders
                </Dropdown.Item>
                <Dropdown.Item
                  className={palletsMatch && 'active'}
                  href={palletsRoute}
                >
                  Pallets
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <Nav>
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle id="nav-actions-dropdown" as={Nav.Item}>
                <Button
                  className="nav-actions-button d-flex flex-row align-items-center text-decoration-none"
                  variant="link"
                >
                  <span className="d-flex flex-column">
                    <span>Ryan Lockard</span>
                  </span>
                  <BsPeopleCircle className="ml-4" size={16} />
                </Button>
              </Dropdown.Toggle>
              <Dropdown.Menu align="right">
                {/*  */}
                <Dropdown.Header>Configuration</Dropdown.Header>
                <Dropdown.Item>Account Settings</Dropdown.Item>
                <Dropdown.Item>Warehouse Settings</Dropdown.Item>
                {/*  */}
                <Dropdown.Header>Support</Dropdown.Header>
                <Dropdown.Item>User Manual</Dropdown.Item>
                <Dropdown.Item>Support Center</Dropdown.Item>
                {/*  */}
                <Dropdown.Header>Management</Dropdown.Header>
                <Dropdown.Item className="text-primary switch-warehouse">
                  Switch Warehouse
                </Dropdown.Item>
                <Dropdown.Item className="text-danger logout">
                  Logout
                </Dropdown.Item>
                {/*  */}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container className={!fluid && 'my-4'} fluid={fluid}>
        {children}
      </Container>
    </>
  )
}

DashLayout.defaultProps = {
  fluid: false,
}

export default DashLayout
