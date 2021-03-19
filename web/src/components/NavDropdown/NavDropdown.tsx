import { useEffect, useState } from 'react'
import { Link } from '@redwoodjs/router'

import './NavDropdown.css'

export interface NavDropdownProps {
  active: boolean
  to: string
}

const NavDropdown: React.FC<NavDropdownProps> = ({ active, children, to }) => {
  const [classNames, setClassNames] = useState('')

  useEffect(() => {
    setClassNames(` ${active ? 'active text-light' : ''}`)
  }, [active, setClassNames])

  return (
    <Link className={`link dropdown-item nav-dropdown ${classNames}`} to={to}>
      {children}
    </Link>
  )
}

export default NavDropdown
