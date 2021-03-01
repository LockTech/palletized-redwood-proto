import { Link } from '@redwoodjs/router'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { BsChevronRight, BsInfoCircle } from 'react-icons/bs'

import TileCard from 'src/components/TileCard/TileCard'

export type DashTileFooterLink = {
  text: string
  to: string
}
export interface DashTileCardProps {
  footer: DashTileFooterLink
  icon: (size: number) => React.ReactNode
  text: React.ReactNode
  title: React.ReactNode
  toolTip: (props: unknown) => React.ReactNode
}

const DashTileCard: React.FC<DashTileCardProps> = ({
  footer,
  icon,
  text,
  title,
  toolTip,
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
        <p className="mb-0">{title}</p>
        <OverlayTrigger
          trigger={['click', 'hover']}
          placement="bottom"
          delay={{ show: 30, hide: 500 }}
          overlay={toolTip}
        >
          <BsInfoCircle className="ml-2" />
        </OverlayTrigger>
      </div>
    }
    icon={icon}
    text={<p className="display-4 mb-0 mr-3">{text}</p>}
  />
)

export default DashTileCard
