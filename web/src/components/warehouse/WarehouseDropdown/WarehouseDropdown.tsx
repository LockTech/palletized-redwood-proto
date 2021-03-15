import { useMemo } from 'react'
import { routes, useMatch } from '@redwoodjs/router'
import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav'

import NavDropdown from 'src/components/NavDropdown/NavDropdown'

const StorageDropdown: React.FunctionComponent = () => {
  const createWarehouseRoute = useMemo(() => routes.createWarehouse(), [])
  const createWarehouseMatch = useMatch(createWarehouseRoute).match
  const warehousesRoute = useMemo(() => routes.warehouses(), [])
  const warehousesMatch = useMatch(warehousesRoute).match

  const createLocationRoute = useMemo(() => routes.createLocation(), [])
  const createLocationMatch = useMatch(createLocationRoute).match
  const locationsRoute = useMemo(() => routes.locations(), [])
  const locationsMatch = useMatch(locationsRoute).match

  return (
    <Dropdown>
      <Dropdown.Toggle
        as={Nav.Link}
        className={
          (createWarehouseMatch ||
            warehousesMatch ||
            createLocationMatch ||
            locationsMatch) &&
          'active'
        }
      >
        Storage
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Header>Warehouses</Dropdown.Header>
        <NavDropdown active={createWarehouseMatch} to={createWarehouseRoute}>
          Create Warehouse
        </NavDropdown>
        <NavDropdown active={warehousesMatch} to={warehousesRoute}>
          List Warehouses
        </NavDropdown>
        <Dropdown.Divider />
        <Dropdown.Header>Locations</Dropdown.Header>
        <NavDropdown active={createLocationMatch} to={createLocationRoute}>
          Create Location
        </NavDropdown>
        <NavDropdown active={locationsMatch} to={locationsRoute}>
          List Locations
        </NavDropdown>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default StorageDropdown
