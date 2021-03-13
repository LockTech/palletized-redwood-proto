import { routes } from '@redwoodjs/router'

import TileCard from 'src/components/TileCard/TileCard'
import type { TileCardProps } from 'src/components/TileCard/TileCard'
import ActiveOrderCountCell from 'src/components/order/ActiveOrderCountCell'

export interface ActiveOrderTileProps extends TileCardProps {
  warehouseId: string
}

const ActiveOrderTile: React.FC<ActiveOrderTileProps> = ({
  warehouseId,
  ...otherProps
}) => {
  return (
    <TileCard
      footer={{
        text: 'Active Order list',
        to: routes.orders({ active: 'true' }),
      }}
      header="Active Orders"
      headerTooltip={
        <span>
          Active Orders are Orders which have Pallets with the status
          &quot;Not-Shipped&quot;.
        </span>
      }
      {...otherProps}
    >
      <p className="mb-0 display-4">
        <ActiveOrderCountCell id={warehouseId} />
      </p>
    </TileCard>
  )
}

export default ActiveOrderTile
