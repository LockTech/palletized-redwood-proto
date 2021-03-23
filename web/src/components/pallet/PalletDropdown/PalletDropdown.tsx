import { useMemo } from 'react'
import { routes, useMatch } from '@redwoodjs/router'
import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav'

import NavDropdown from 'src/components/NavDropdown/NavDropdown'

const PalletDropdown: React.FC = () => {
  const createPalletRoute = useMemo(() => routes.createPallet(), [])
  const createPalletMatch = useMatch(createPalletRoute).match
  const palletsRoute = useMemo(() => routes.pallets(), [])
  const palletsMatch = useMatch(palletsRoute).match

  return (
    <Dropdown>
      <Dropdown.Toggle
        as={Nav.Link}
        className={(createPalletMatch || palletsMatch) && 'active'}
      >
        Pallets
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <NavDropdown active={createPalletMatch} to={createPalletRoute}>
          Create Pallet
        </NavDropdown>
        <NavDropdown active={palletsMatch} to={palletsRoute}>
          List Pallets
        </NavDropdown>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default PalletDropdown
