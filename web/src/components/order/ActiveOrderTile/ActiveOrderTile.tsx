import { routes } from '@redwoodjs/router'

import TileCard from 'src/components/TileCard/TileCard'
import type { TileCardProps } from 'src/components/TileCard/TileCard'
import OrderCountCell from 'src/components/order/OrderCountCell'

export interface ActiveOrderTileProps extends TileCardProps {
  order: IOrder
}

/**
 * Retrieves a formatted, using `<TileCard>`, **count** of the number of *active orders*: Orders which have
 * Pallets-which have the status of `'not-shipped'`.
 */
const ActiveOrderTile: React.FC<ActiveOrderTileProps> = ({
  order,
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
      <p className="mb-0 display-4 text-monospace">
        <OrderCountCell
          order={{
            ...order,
            pallets: {
              ...(order.pallets || null),
              // pallet.status === 'not-shipped'
            },
          }}
        />
      </p>
    </TileCard>
  )
}

export default ActiveOrderTile
