import { useCallback, useMemo, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { BsPeopleCircle } from 'react-icons/bs'
import { Link, routes, useMatch } from '@redwoodjs/router'

import NavLink from 'src/components/NavLink/NavLink'

import './DashLayout.css'

let renders = 0

/**
 * Primary `Layout` for the Palletized application.
 *
 * Accepted Props:
 *
 * * `fluid` - can be used to remove margins and apply the `fluid` prop to the
 * underlying Bootstrap `<Container>` wrapping `children` content.
 */
const DashLayout = ({ children, fluid }) => {
  // Limit repetative code + useMatch for Bootstrap-compatible 'active' class.
  // Warehouses
  const warehousesRoute = useMemo(() => routes.warehouses(), [])
  const warehousesMatch = useMatch(warehousesRoute).match

  const [navbarExpanded, setNavbarExpanded] = useState(false)
  const onSetNavbarExpanded = useCallback(
    (expanded: boolean) => {
      setNavbarExpanded(expanded)
    },
    [setNavbarExpanded]
  )

  const onClickApp = useCallback(() => {
    if (navbarExpanded) {
      setNavbarExpanded(false)
    }
  }, [navbarExpanded, setNavbarExpanded])

  renders++
  console.log(renders)

  return (
    <>
      <Navbar
        bg="dark"
        expand="lg"
        expanded={navbarExpanded}
        onToggle={onSetNavbarExpanded}
        variant="dark"
      >
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
                className={warehousesMatch && 'active'}
              >
                Warehouses
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  className={warehousesMatch && 'active'}
                  href={warehousesRoute}
                >
                  List Warehouses
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
      <Container
        className={!fluid && 'my-4'}
        fluid={fluid}
        onClick={onClickApp}
      >
        {children}
      </Container>
    </>
  )
}

DashLayout.defaultProps = {
  fluid: false,
}

export default DashLayout
