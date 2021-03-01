import Card, { CardProps } from 'react-bootstrap/Card'

export interface TileCardProps {
  cardProps?: Partial<CardProps>
  cardBodyProps?: Partial<CardProps>
  cardFooterPops?: Partial<CardProps>
  cardHeaderProps?: Partial<CardProps>
  footer?: React.ReactNode
  header?: React.ReactNode
  icon: (size: number) => React.ReactNode
  /**
   * Instead of Icon->Text, make the Tile Text->Icon
   */
  reverse?: boolean
  text: React.ReactNode
}

const TileCard: React.FC<TileCardProps> = ({
  cardProps,
  cardBodyProps,
  cardFooterPops,
  cardHeaderProps,
  footer,
  header,
  icon,
  reverse,
  text,
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
            <span className="flex-grow-1">{text}</span>
            {icon(48)}
          </>
        )}
        {reverse && (
          <>
            {icon(48)}
            <span className="flex-grow-1">{text}</span>
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
