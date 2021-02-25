import { Link, routes } from '@redwoodjs/router'

import Locations from 'src/components/Locations'

export const QUERY = gql`
  query LOCATIONS {
    locations {
      id
      name
      updatedAt
      createdAt
      warehouseId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No locations yet. '}
      <Link to={routes.newLocation()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ locations }) => {
  return <Locations locations={locations} />
}
