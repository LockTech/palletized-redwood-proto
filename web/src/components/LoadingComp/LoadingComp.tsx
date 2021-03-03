import Spinner from 'react-bootstrap/Spinner'
import type { SpinnerProps } from 'react-bootstrap/Spinner'

export interface LoadingCompProps {
  containerProps?: Partial<React.HTMLProps<HTMLDivElement>>
  spinnerProps?: Partial<SpinnerProps>
}

const LoadingComp: React.FC<LoadingCompProps> = ({
  containerProps,
  spinnerProps,
}) => {
  return (
    <div className="d-flex justify-content-center mt-3" {...containerProps}>
      <Spinner animation="grow" variant="secondary" {...spinnerProps} />
    </div>
  )
}

export default LoadingComp
