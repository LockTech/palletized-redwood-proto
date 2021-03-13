import { useMemo } from 'react'
import { routes, useMatch } from '@redwoodjs/router'
import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav'

const ProductDropdown: React.FC = () => {
  const productsRoute = useMemo(() => routes.products(), [])
  const productsMatch = useMatch(productsRoute).match

  return (
    <Dropdown>
      <Dropdown.Toggle as={Nav.Link} className={productsMatch && 'active'}>
        Products
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          className={productsMatch && 'active'}
          href={productsRoute}
        >
          List Products
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default ProductDropdown
