import Card from 'react-bootstrap/Card'

export interface TileCardProps {
  footer?: React.ReactNode
  header?: React.ReactNode
  icon: (size: number) => React.ReactNode
  text: React.ReactNode
}

const TileCard: React.FC<TileCardProps> = ({
  footer,
  header,
  icon,
  text,
  ...otherProps
}) => {
  return (
    <Card {...otherProps}>
      {header && <Card.Header>{header}</Card.Header>}
      <Card.Body className="d-flex flex-row align-items-center">
        {icon(48)}
        <span className="flex-grow-1">{text}</span>
      </Card.Body>
      {footer && <Card.Footer>{footer}</Card.Footer>}
    </Card>
  )
}

export default TileCard
