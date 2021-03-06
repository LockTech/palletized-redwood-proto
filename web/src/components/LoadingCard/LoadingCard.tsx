import Card from 'react-bootstrap/Card'
import type { CardProps } from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import type { SpinnerProps } from 'react-bootstrap/Spinner'

export interface LoadingCardProps {
  /**
   * Override the underlying `<Card>`-s props.
   */
  cardProps?: Partial<CardProps>
  /**
   * Override the underlying `<Card.Body>`-s props.
   */
  cardBodyProps?: Partial<React.HTMLAttributes<HTMLDivElement>>
  /**
   * *Optionally* provide a footer to be used as the content for a `<Card.Footer>`
   */
  footer?: React.ReactNode
  /**
   * *Optionally* provide a header to be used as the content for a `<Card.Header>`
   */
  header?: React.ReactNode
  /**
   * Override the underlying `<Spinner>`-s props.
   */
  spinnerProps?: Partial<SpinnerProps>
}

/**
 * Provides a Bootstrap `<Spinner>` contained within a `<Card>` component.
 *
 * `props` apply to the `<Spinner>` component.
 */
const LoadingCard: React.FC<LoadingCardProps> = ({
  cardProps,
  cardBodyProps,
  footer,
  header,
  spinnerProps,
}) => {
  return (
    <Card {...cardProps}>
      {header && <Card.Header>{header}</Card.Header>}
      <Card.Body className="d-flex justify-content-center" {...cardBodyProps}>
        <Spinner animation="grow" variant="secondary" {...spinnerProps} />
      </Card.Body>
      {footer && <Card.Footer>{footer}</Card.Footer>}
    </Card>
  )
}

export default LoadingCard
