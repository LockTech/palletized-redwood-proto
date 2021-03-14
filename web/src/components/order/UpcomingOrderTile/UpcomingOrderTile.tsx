import { routes } from '@redwoodjs/router'

import TileCard from 'src/components/TileCard/TileCard'
import type { TileCardProps } from 'src/components/TileCard/TileCard'
import OrderCountCell from 'src/components/order/OrderCountCell'

export interface UpcomingOrderTileProps extends TileCardProps {
  /**
   * Warehouse ID to retrieve Upcoming-Orders for.
   *
   * use `null` to retrieve **every** upcoming order for an organization.
   */
  warehouseId?: string
}

const UpcomingOrderTile: React.FC<UpcomingOrderTileProps> = ({
  warehouseId,
  ...otherProps
}) => {
  return (
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
      {...otherProps}
    >
      <p className="mb-0 display-4">
        <OrderCountCell warehouseId={warehouseId} />
      </p>
    </TileCard>
  )
}

export default UpcomingOrderTile
