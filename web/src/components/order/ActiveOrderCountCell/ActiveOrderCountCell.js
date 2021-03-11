import { useEffect } from 'react'
import { routes } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/toast'
import Skeleton from 'react-loading-skeleton'

import TileCard from 'src/components/TileCard'

export const QUERY = gql`
  query ActiveOrderCountQuery($id: String!) {
    count: orderCountInWarehouse(warehouseId: $id)
    # Pending check for order.status
  }
`

const CommonTileCard = ({ children }) => (
  <TileCard
    footer={{
      text: 'Active Order list',
      to: routes.orders({ active: true }),
    }}
    header="Active Orders"
    headerTooltip={
      <span>
        Active Orders are Orders which have Pallets with the status
        &quot;Not-Shipped&quot;.
      </span>
    }
  >
    <p className="mb-0 display-4">{children}</p>
  </TileCard>
)

export const Loading = () => (
  <CommonTileCard>
    <Skeleton />
  </CommonTileCard>
)

export const Empty = () => <CommonTileCard>0</CommonTileCard>

export const Failure = ({ id }) => {
  useEffect(() => {
    toast.error(
      `An error occured while retrieving the Active-Order count in Warehouse: ${id}`
    )
  }, [id])

  return <CommonTileCard>-</CommonTileCard>
}

export const Success = ({ count }) => <CommonTileCard>{count}</CommonTileCard>
