import { Link, routes } from '@redwoodjs/router'

import PalletProducts from 'src/components/PalletProducts'

export const QUERY = gql`
  query PALLET_PRODUCTS {
    palletProducts {
      id
      palletId
      productId
      updatedAt
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No palletProducts yet. '}
      <Link to={routes.newPalletProduct()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ palletProducts }) => {
  return <PalletProducts palletProducts={palletProducts} />
}
