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
  spinnerProps,
}) => {
  return (
    <Card {...cardProps}>
      <Card.Body className="d-flex justify-content-center" {...cardBodyProps}>
        <Spinner animation="grow" variant="secondary" {...spinnerProps} />
      </Card.Body>
    </Card>
  )
}

export default LoadingCard
