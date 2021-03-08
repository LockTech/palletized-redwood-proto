import { useEffect } from 'react'
import { routes } from '@redwoodjs/router'
import { useFlash } from '@redwoodjs/web'
import Skeleton from 'react-loading-skeleton'

import TileCard from 'src/components/TileCard'

export const QUERY = gql`
  query ActiveOrderCountCardQuery($id: String!) {
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
        The number of <em>open</em> Orders with Pallets at this Warehouse.
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

export const Empty = () => '0'

export const Failure = ({ id }) => {
  const { addMessage } = useFlash()

  useEffect(() => {
    addMessage(
      `An error occured while retrieving the Active-Order count in Warehouse: ${id}`,
      {
        variant: 'danger',
      }
    )
  }, [addMessage, id])

  return <CommonTileCard>-</CommonTileCard>
}

export const Success = ({ count }) => <CommonTileCard>{count}</CommonTileCard>
