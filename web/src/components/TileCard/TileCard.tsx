import Card, { CardProps } from 'react-bootstrap/Card'

export interface TileCardProps {
  cardProps?: Partial<CardProps>
  cardBodyProps?: Partial<CardProps>
  cardFooterPops?: Partial<CardProps>
  cardHeaderProps?: Partial<CardProps>
  footer?: React.ReactNode
  header?: React.ReactNode
  icon: (size: number) => React.ReactNode
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
  text,
}) => {
  return (
    <Card {...cardProps}>
      {header && <Card.Header {...cardHeaderProps}>{header}</Card.Header>}
      <Card.Body
        className="d-flex flex-row align-items-center"
        {...cardBodyProps}
      >
        {icon(48)}
        <span className="flex-grow-1">{text}</span>
      </Card.Body>
      {footer && <Card.Footer {...cardFooterPops}>{footer}</Card.Footer>}
    </Card>
  )
}

export default TileCard
