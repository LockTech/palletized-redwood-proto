import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { BsInfoCircle } from 'react-icons/bs'

const CommonTooltip: React.FunctionComponent = ({ children }) => {
  return (
    <OverlayTrigger
      trigger={['click', 'hover', 'focus']}
      placement="bottom-end"
      delay={{ show: 30, hide: 250 }}
      overlay={<Tooltip id="locationTooltip">{children}</Tooltip>}
    >
      <BsInfoCircle className="ml-2" />
    </OverlayTrigger>
  )
}

export default CommonTooltip
