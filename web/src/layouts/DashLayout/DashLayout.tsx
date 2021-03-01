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
 * Renders a `<Navbar>` and wraps content in a full-height-navbar-aware `<Container>`.
 */
const DashLayout: React.FC = ({ children }) => {
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
        className="dash-layout-navbar"
        expand="lg"
        expanded={navbarExpanded}
        onToggle={onSetNavbarExpanded}
        variant="dark"
      >
        <Navbar.Brand>
          <Link
            className="dash-layout-link-light text-decoration-none"
            to={routes.dashboard()}
          >
            Palletized
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto layout-nav-links">
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
          <Nav className="dash-layout-nav-actions">
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle
                id="dash-layout-nav-actions-dropdown"
                as={Nav.Item}
              >
                <Button
                  className="dash-layout-nav-actions-button d-flex flex-row align-items-center text-decoration-none"
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
                <Dropdown.Item className="dash-layout-switch-warehouse text-primary">
                  Switch Warehouse
                </Dropdown.Item>
                <Dropdown.Item className="dash-layout-logout text-danger">
                  Logout
                </Dropdown.Item>
                {/*  */}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid className="dash-layout-container" onClick={onClickApp}>
        {children}
      </Container>
    </>
  )
}

export default DashLayout
