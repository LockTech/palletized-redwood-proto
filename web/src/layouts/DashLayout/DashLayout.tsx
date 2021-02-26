import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, routes } from '@redwoodjs/router'

import NavLink from 'src/components/common/NavLink'

import './DashLayout.css'

const DashLayout = ({ children }) => {
  console.log(routes)

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
          <Nav>
            <NavLink linkTo={routes.dashboard()}>Dashboard</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {children}
    </>
  )
}

export default DashLayout
