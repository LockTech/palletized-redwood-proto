import { useCallback, useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { BsPeopleCircle } from 'react-icons/bs'

import NavLink from 'src/components/NavLink/NavLink'
import WarehouseDropdown from 'src/components/warehouse/WarehouseDropdown/WarehouseDropdown'
import OrderDropdown from 'src/components/order/OrderDropdown/OrderDropdown'
import ProductDropdown from 'src/components/product/ProductDropdown/ProductDropdown'

import './DashLayout.scss'

/**
 * Primary `Layout` for the Palletized application.
 *
 * Renders a `<Navbar>` and wraps content in a full-height-navbar-aware `<Container>`.
 */
const DashLayout: React.FC = ({ children }) => {
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
            <WarehouseDropdown />
            <OrderDropdown />
            <ProductDropdown />
          </Nav>
          <Nav className="dash-layout-nav-actions">
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle
                id="dash-layout-nav-actions-dropdown"
                as={Nav.Link}
                className="dash-layout-nav-actions-toggle d-flex flex-row align-items-center text-decoration-none"
              >
                <span className="d-flex flex-column">
                  <span>Ryan Lockard</span>
                </span>
                <BsPeopleCircle className="ml-4" size={16} />
              </Dropdown.Toggle>
              <Dropdown.Menu align="right">
                {/*  */}
                <Dropdown.Header>Configuration</Dropdown.Header>
                <Dropdown.Item>Account Settings</Dropdown.Item>
                {/*  */}
                <Dropdown.Divider />
                <Dropdown.Header>Support</Dropdown.Header>
                <Dropdown.Item>User Manual</Dropdown.Item>
                <Dropdown.Item>Support Center</Dropdown.Item>
                {/*  */}
                <Dropdown.Divider />
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
