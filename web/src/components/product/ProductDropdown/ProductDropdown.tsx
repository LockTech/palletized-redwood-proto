import { useMemo } from 'react'
import { routes, useMatch } from '@redwoodjs/router'
import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav'

import NavDropdown from 'src/components/NavDropdown/NavDropdown'

const ProductDropdown: React.FC = () => {
  const createProductRoute = useMemo(() => routes.createProduct(), [])
  const createProductMatch = useMatch(createProductRoute).match
  const productsRoute = useMemo(() => routes.products(), [])
  const productsMatch = useMatch(productsRoute).match

  return (
    <Dropdown>
      <Dropdown.Toggle
        as={Nav.Link}
        className={(createProductMatch || productsMatch) && 'active'}
      >
        Products
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <NavDropdown active={createProductMatch} to={createProductRoute}>
          Create Product
        </NavDropdown>
        <NavDropdown active={productsMatch} to={productsRoute}>
          List Products
        </NavDropdown>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default ProductDropdown
