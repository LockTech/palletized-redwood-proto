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
    setClassNames(`nav-dropdown ${active ? 'active text-light' : 'text-dark'}`)
  }, [active, setClassNames])

  return (
    <DropdownItem className={classNames}>
      <Link className="link" to={to}>
        {children}
      </Link>
    </DropdownItem>
  )
}

export default NavDropdown
