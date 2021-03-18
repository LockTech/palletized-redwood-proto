import { routes } from '@redwoodjs/router'

import TileCard from 'src/components/TileCard/TileCard'
import type { TileCardProps } from 'src/components/TileCard/TileCard'
import OrderCountCell from 'src/components/order/OrderCountCell'

export interface UpcomingOrderTileProps extends TileCardProps {
  order?: IOrder
}

/**
 * Retrieve a formatted, using `<TileCard>`, **count** of *up-coming orders*: `Active Orders` which
 * have delivery dates within the next seven (7) days.
 */
const UpcomingOrderTile: React.FC<UpcomingOrderTileProps> = ({
  order,
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
      <p className="mb-0 display-4 text-monospace">
        <OrderCountCell
          order={{
            ...order,
            // order.shipdate.day <= NOW().day
          }}
        />
      </p>
    </TileCard>
  )
}

export default UpcomingOrderTile
