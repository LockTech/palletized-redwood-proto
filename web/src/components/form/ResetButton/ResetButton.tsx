import Button from 'react-bootstrap/Button'
import type { ButtonProps } from 'react-bootstrap/Button'

export interface ResetButtonProps extends ButtonProps {
  reset: () => void
}

const ResetButton: React.FC<ResetButtonProps> = ({ reset, ...otherProps }) => {
  return (
    <Button
      block
      variant="outline-secondary"
      onClick={() => reset()}
      {...otherProps}
    >
      Reset Fields
    </Button>
  )
}

export default ResetButton
