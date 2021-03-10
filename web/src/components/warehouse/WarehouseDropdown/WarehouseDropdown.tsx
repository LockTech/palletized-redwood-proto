import { useMemo } from 'react'
import { routes, useMatch } from '@redwoodjs/router'
import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav'

const WarehouseDropdown: React.FunctionComponent = () => {
  const createWarehouseRoute = useMemo(() => routes.createWarehouse(), [])
  const createWarehouseMatch = useMatch(createWarehouseRoute).match
  const warehousesRoute = useMemo(() => routes.warehouses(), [])
  const warehousesMatch = useMatch(warehousesRoute).match

  return (
    <Dropdown>
      <Dropdown.Toggle
        as={Nav.Link}
        className={(createWarehouseMatch || warehousesMatch) && 'active'}
      >
        Warehouses
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          className={warehousesMatch && 'active'}
          href={warehousesRoute}
        >
          Warehouses
        </Dropdown.Item>
        <Dropdown.Item
          className={createWarehouseMatch && 'active'}
          href={createWarehouseRoute}
        >
          Create Warehouse
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default WarehouseDropdown
