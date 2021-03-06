import { routes } from '@redwoodjs/router'
import Skeleton from 'react-loading-skeleton'

import TileCard from 'src/components/TileCard'

export const QUERY = gql`
  query UpcomingOrderCountQuery($id: String!) {
    count: orderCountInWarehouse(warehouseId: $id)
  }
`

const CommonTileCard = ({ children }) => (
  <TileCard
    footer={{
      text: 'Upcoming Deliveries',
      to: routes.warehouses(),
    }}
    header="Upcoming Deliveries"
    headerTooltip="The number of Active Orders at this Warehouse which have delivery-dates within the next seven (7) days."
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
