import { Link } from '@redwoodjs/router'
import Card, { CardProps } from 'react-bootstrap/Card'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { BsChevronRight, BsInfoCircle } from 'react-icons/bs'

export type TileFooterLink = {
  text: string
  to: string
}

export interface TileCardProps extends React.HTMLProps<HTMLParagraphElement> {
  cardProps?: Partial<CardProps>
  cardBodyProps?: Partial<CardProps>
  cardFooterPops?: Partial<CardProps>
  cardHeaderProps?: Partial<CardProps>
  footer?: TileFooterLink
  header?: string
  headerTooltip?: React.ReactNode
  icon?: (size: number) => React.ReactNode
}

const TileCard: React.FC<TileCardProps> = ({
  cardProps,
  cardBodyProps,
  cardFooterPops,
  cardHeaderProps,
  children,
  footer,
  header,
  headerTooltip,
  icon,
}) => {
  return (
    <Card {...cardProps}>
      {header && (
        <Card.Header {...cardHeaderProps}>
          <div className="d-flex flex-direction-row align-items-center justify-content-between">
            <span>{header}</span>
            {headerTooltip && (
              <OverlayTrigger
                trigger={['click', 'hover', 'focus']}
                placement="bottom-end"
                delay={{ show: 30, hide: 250 }}
                overlay={
                  <Tooltip id="tilecard-tooltip">
                    <span>{headerTooltip}</span>
                  </Tooltip>
                }
              >
                <BsInfoCircle className="ml-2" />
              </OverlayTrigger>
            )}
          </div>
        </Card.Header>
      )}
      <Card.Body
        className="d-flex flex-row align-items-center"
        {...cardBodyProps}
      >
        <span className="flex-grow-1">{children}</span>
        {icon && icon(48)}
      </Card.Body>
      {footer && (
        <Card.Footer {...cardFooterPops}>
          <Link className="text-decoration-none" to={footer.to}>
            {footer.text}
            <BsChevronRight className="ml-2" />
          </Link>
        </Card.Footer>
      )}
    </Card>
  )
}

export default TileCard
