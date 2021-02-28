import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { BsInfoCircle } from 'react-icons/bs'

import TileCard from 'src/components/TileCard/TileCard'

export interface DashTileCardProps {
  icon: (size: number) => React.ReactNode
  text: React.ReactNode
  title: React.ReactNode
  toolTip: (props: unknown) => React.ReactNode
}

const DashTileCard: React.FC<DashTileCardProps> = ({
  icon,
  text,
  title,
  toolTip,
}) => (
  <TileCard
    header={
      <div className="d-flex flex-direction-row align-items-center">
        <p className="mb-0">{title}</p>
        <OverlayTrigger
          placement="bottom-start"
          delay={{ show: 30, hide: 1240 }}
          overlay={toolTip}
        >
          <BsInfoCircle className="ml-2" />
        </OverlayTrigger>
      </div>
    }
    icon={icon}
    text={<p className="display-4 mb-0 ml-3 text-right">{text}</p>}
  />
)

export default DashTileCard
