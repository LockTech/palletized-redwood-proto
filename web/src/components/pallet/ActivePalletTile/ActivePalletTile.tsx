import TileCard from 'src/components/TileCard/TileCard'
import type { TileCardProps } from 'src/components/TileCard/TileCard'
import PalletCountCell from 'src/components/pallet/PalletCountCell'

export interface ActivePalletTileProps extends TileCardProps {
  /**
   * Order ID to retrieve a count for.
   *
   * Use `null` to retrieve a active-pallet count for an entire organization.
   */
  id?: string
}

const ActivePalletTile: React.FC<ActivePalletTileProps> = ({
  id,
  ...otherProps
}) => {
  return (
    <TileCard
      footer={{
        text: 'Active Pallet List',
        // to: routes.pallets({ active: true }),
      }}
      header="Active Pallets"
      headerTooltip={
        <span>
          Active Pallets are <em>Pallets</em> which have been tagged to an{' '}
          <em>Order</em>, and that have the <em>Not-Shipped</em> status.
        </span>
      }
      {...otherProps}
    >
      <p className="mb-0 display-4 text-monospace">
        <PalletCountCell
          pallet={{
            orderId: id,
          }}
        />
      </p>
    </TileCard>
  )
}

export default ActivePalletTile
