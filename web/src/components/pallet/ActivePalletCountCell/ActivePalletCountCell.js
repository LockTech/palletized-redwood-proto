import { useEffect } from 'react'
// import { routes } from '@redwoodjs/router'
import { useFlash } from '@redwoodjs/web'
import Skeleton from 'react-loading-skeleton'

import TileCard from 'src/components/TileCard'

export const QUERY = gql`
  query ActivePalletCountQuery($id: String!) {
    count: palletCountForOrder(orderId: $id)
  }
`

const CommonTileCard = ({ children }) => (
  <TileCard
    footer={{
      text: 'Active Pallet List',
      // to: routes.pallets({ active: true }),
    }}
    header="Active Pallets"
    headerTooltip={
      <span>
        Active Pallets are Pallets which have been tagged to an Order, and that
        have the <em>Not-Shipped</em> status.
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
  const { addMessage } = useFlash()

  useEffect(() => {
    addMessage(
      `An error occured while retrieving the Active-Pallet count for Order: ${id}`,
      {
        variant: 'danger',
      }
    )
  }, [addMessage, id])

  return <CommonTileCard>-</CommonTileCard>
}

export const Success = ({ count }) => <CommonTileCard>{count}</CommonTileCard>
