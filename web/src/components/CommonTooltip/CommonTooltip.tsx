import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import type { OverlayTriggerProps } from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import type { TooltipProps } from 'react-bootstrap/Tooltip'
import { BsInfoCircle } from 'react-icons/bs'
import type { IconBaseProps } from 'react-icons'

export interface CommonTooltipProps {
  iconProps?: Partial<IconBaseProps>
  overlayProps?: Partial<OverlayTriggerProps>
  tooltipProps?: Partial<TooltipProps>
}

const CommonTooltip: React.FC<CommonTooltipProps> = ({
  children,
  iconProps,
  overlayProps,
  tooltipProps,
  ...otherProps
}) => {
  return (
    <OverlayTrigger
      trigger={['click', 'hover', 'focus']}
      placement="bottom-end"
      delay={{ show: 30, hide: 250 }}
      overlay={
        <Tooltip id="locationTooltip" {...tooltipProps}>
          {children}
        </Tooltip>
      }
      {...overlayProps}
      {...otherProps}
    >
      <BsInfoCircle className="ml-2" {...iconProps} />
    </OverlayTrigger>
  )
}

export default CommonTooltip
