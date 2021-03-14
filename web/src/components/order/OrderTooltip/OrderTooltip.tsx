import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { BsInfoCircle } from 'react-icons/bs'

const OrderTooltip: React.FunctionComponent = () => {
  return (
    <OverlayTrigger
      trigger={['click', 'hover', 'focus']}
      placement="bottom-end"
      delay={{ show: 30, hide: 250 }}
      overlay={
        <Tooltip id="locationTooltip">
          <span>
            Orders group many <em>Pallets</em> under common identifiers.
          </span>
        </Tooltip>
      }
    >
      <BsInfoCircle className="ml-2" />
    </OverlayTrigger>
  )
}

export default OrderTooltip
