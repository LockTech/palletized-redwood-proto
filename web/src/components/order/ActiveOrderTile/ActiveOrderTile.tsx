import { routes } from '@redwoodjs/router'

import TileCard from 'src/components/TileCard/TileCard'
import type { TileCardProps } from 'src/components/TileCard/TileCard'
import OrderCountCell from 'src/components/order/OrderCountCell'

export interface ActiveOrderTileProps extends TileCardProps {
  /**
   * Warehouse ID to retrieve Active-Orders for.
   *
   * Use `null` to retrieve **every** active-order for an organization.
   */
  warehouseId?: string
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
          Active Orders are <em>Orders</em> which have <em>Pallets</em> with the
          status &quot;Not-Shipped&quot;.
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

export default ActiveOrderTile
