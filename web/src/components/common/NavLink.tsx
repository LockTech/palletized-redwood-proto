import Nav from 'react-bootstrap/Nav'
import { NavLink } from '@redwoodjs/router'

export interface NavLinkProps extends React.HTMLAttributes<HTMLDivElement> {
  linkTo: string
}

const _NavLink: React.FC<NavLinkProps> = ({ children, linkTo }) => (
  <Nav.Link as={NavLink} activeClassName="active" href={linkTo} to={linkTo}>
    {children}
  </Nav.Link>
)
export default _NavLink
