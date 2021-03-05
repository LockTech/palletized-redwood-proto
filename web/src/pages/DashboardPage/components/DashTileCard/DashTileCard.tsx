import { Link } from '@redwoodjs/router'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { BsChevronRight, BsInfoCircle } from 'react-icons/bs'

import TileCard from 'src/components/TileCard/TileCard'

export type DashTileFooterLink = {
  text: string
  to: string
}
export interface DashTileCardProps extends React.HTMLProps<HTMLDivElement> {
  footer: DashTileFooterLink
  icon: (size: number) => React.ReactNode
  header: React.ReactNode
  headerTooltip: (props: unknown) => React.ReactNode
}

const DashTileCard: React.FC<DashTileCardProps> = ({
  children,
  footer,
  icon,
  header,
  headerTooltip,
}) => (
  <TileCard
    footer={
      <Link className="text-decoration-none" to={footer.to}>
        {footer.text}
        <BsChevronRight className="ml-2" />
      </Link>
    }
    header={
      <div className="d-flex flex-direction-row align-items-center">
        <p className="mb-0">{header}</p>
        <OverlayTrigger
          trigger={['click', 'hover']}
          placement="bottom"
          delay={{ show: 30, hide: 500 }}
          overlay={headerTooltip}
        >
          <BsInfoCircle className="ml-2" />
        </OverlayTrigger>
      </div>
    }
    icon={icon}
  >
    <p className="display-4 mb-0 mr-3">{children}</p>
  </TileCard>
)

export default DashTileCard
