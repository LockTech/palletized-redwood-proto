import { useMemo } from 'react'
import { routes, useMatch } from '@redwoodjs/router'
import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav'

const LocationDropdown: React.FunctionComponent = () => {
  const createLocationRoute = useMemo(() => routes.createLocation(), [])
  const createLocationMatch = useMatch(createLocationRoute).match
  const locationsRoute = useMemo(() => routes.locations(), [])
  const locationsMatch = useMatch(locationsRoute).match

  return (
    <Dropdown>
      <Dropdown.Toggle
        as={Nav.Link}
        className={(createLocationMatch || locationsMatch) && 'active'}
      >
        Locations
      </Dropdown.Toggle>
      <Dropdown.Menu>
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

export default LocationDropdown
