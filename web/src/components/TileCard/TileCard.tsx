import Card, { CardProps } from 'react-bootstrap/Card'

export interface TileCardProps extends React.HTMLProps<HTMLParagraphElement> {
  cardProps?: Partial<CardProps>
  cardBodyProps?: Partial<CardProps>
  cardFooterPops?: Partial<CardProps>
  cardHeaderProps?: Partial<CardProps>
  footer?: React.ReactNode
  header?: React.ReactNode
  icon?: (size: number) => React.ReactNode
  /**
   * Instead of Icon->Text, make the Tile Text->Icon
   */
  reverse?: boolean
}

const TileCard: React.FC<TileCardProps> = ({
  cardProps,
  cardBodyProps,
  cardFooterPops,
  cardHeaderProps,
  children,
  footer,
  header,
  icon,
  reverse,
}) => {
  return (
    <Card {...cardProps}>
      {header && <Card.Header {...cardHeaderProps}>{header}</Card.Header>}
      <Card.Body
        className="d-flex flex-row align-items-center"
        {...cardBodyProps}
      >
        {!reverse && (
          <>
            <span className="flex-grow-1">{children}</span>
            {icon && icon(48)}
          </>
        )}
        {reverse && (
          <>
            {icon && icon(48)}
            <span className="flex-grow-1">{children}</span>
          </>
        )}
      </Card.Body>
      {footer && <Card.Footer {...cardFooterPops}>{footer}</Card.Footer>}
    </Card>
  )
}

TileCard.defaultProps = {
  reverse: false,
}

export default TileCard
