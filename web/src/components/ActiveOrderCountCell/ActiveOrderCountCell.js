import { routes } from '@redwoodjs/router'
import Skeleton from 'react-loading-skeleton'

import TileCard from 'src/components/TileCard'

export const QUERY = gql`
  query ActiveOrderCountCardQuery($warehouseId: String!) {
    count: orderCountInWarehouse(warehouseId: $warehouseId)
    # Pending check for order.status
  }
`

const CommonTileCard = ({ children }) => (
  <TileCard
    footer={{
      text: 'Active Order list',
      to: routes.warehouses(),
    }}
    header="Active Orders"
    headerTooltip="The total number of Orders with Pallets at this warehouse."
  >
    <p className="mb-0 display-4">{children}</p>
  </TileCard>
)

export const Loading = () => (
  <CommonTileCard>
    <Skeleton />
  </CommonTileCard>
)

export const Empty = () => '0'

export const Failure = ({ _error }) => {
  // perform error notification
  return <CommonTileCard>-</CommonTileCard>
}

export const Success = ({ count }) => <CommonTileCard>{count}</CommonTileCard>
