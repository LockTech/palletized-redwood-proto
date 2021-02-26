import { Link, routes } from '@redwoodjs/router'

import Warehouses from 'src/components/Warehouses'

export const QUERY = gql`
  query WAREHOUSES {
    warehouses {
      id
      name
      updatedAt
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No warehouses yet. '}
      <Link to={routes.newWarehouse()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ warehouses }) => {
  return <Warehouses warehouses={warehouses} />
}
