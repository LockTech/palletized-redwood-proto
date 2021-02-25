import { Link, routes } from '@redwoodjs/router'

import Pallets from 'src/components/Pallets'

export const QUERY = gql`
  query PALLETS {
    pallets {
      id
      name
      updatedAt
      createdAt
      locationId
      orderId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No pallets yet. '}
      <Link to={routes.newPallet()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ pallets }) => {
  return <Pallets pallets={pallets} />
}
