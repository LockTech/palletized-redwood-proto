import { useEffect } from 'react'
import { useFlash } from '@redwoodjs/web'
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
    headerTooltip={
      <span>
        Upcoming Deliveries are <em>Active Orders</em> with delivery-dates
        within the next seven (7) days.
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
      `An error occured while retrieving the Upcoming-Order count in Warehouse: ${id}`,
      {
        variant: 'danger',
      }
    )
  }, [addMessage, id])

  // perform error notification
  return <CommonTileCard>-</CommonTileCard>
}

export const Success = ({ count }) => <CommonTileCard>{count}</CommonTileCard>
