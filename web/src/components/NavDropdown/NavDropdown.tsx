import { useEffect, useState } from 'react'
import { Link } from '@redwoodjs/router'
import DropdownItem from 'react-bootstrap/DropdownItem'

import './NavDropdown.css'

export interface NavDropdownProps {
  active: boolean
  to: string
}

const NavDropdown: React.FC<NavDropdownProps> = ({ active, children, to }) => {
  const [classNames, setClassNames] = useState('')

  useEffect(() => {
    setClassNames(`nav-dropdown${active ? ' active' : ''}`)
  }, [active, setClassNames])

  return (
    <DropdownItem as={Link} className={classNames} to={to}>
      {children}
    </DropdownItem>
  )
}

export default NavDropdown
