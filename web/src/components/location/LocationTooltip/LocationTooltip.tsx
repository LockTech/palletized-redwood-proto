import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { BsInfoCircle } from 'react-icons/bs'

const LocationTooltip: React.FunctionComponent = () => {
  return (
    <OverlayTrigger
      trigger={['click', 'hover', 'focus']}
      placement="bottom-end"
      delay={{ show: 30, hide: 250 }}
      overlay={
        <Tooltip id="locationTooltip">
          <span>
            Locations are distinct areas of your <em>Warehouse</em> where{' '}
            <em>Pallets</em> are stored.
          </span>
        </Tooltip>
      }
    >
      <BsInfoCircle className="ml-2" />
    </OverlayTrigger>
  )
}

export default LocationTooltip
