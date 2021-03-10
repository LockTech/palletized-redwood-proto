import { useMemo } from 'react'
import { routes, useMatch } from '@redwoodjs/router'
import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav'

const WarehouseDropdown: React.FunctionComponent = () => {
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
        Warehouses
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          className={warehousesMatch && 'active'}
          href={warehousesRoute}
        >
          Warehouse List
        </Dropdown.Item>
        <Dropdown.Item
          className={createWarehouseMatch && 'active'}
          href={createWarehouseRoute}
        >
          Create Warehouse
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item
          className={locationsMatch && 'active'}
          href={locationsRoute}
        >
          Location List
        </Dropdown.Item>
        <Dropdown.Item
          className={createLocationMatch && 'active'}
          href={createLocationRoute}
        >
          Create Location
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default WarehouseDropdown
