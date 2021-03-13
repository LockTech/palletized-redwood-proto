import { useMemo } from 'react'
import Button from 'react-bootstrap/Button'
import type { ButtonProps } from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

export interface SubmitButtonProps extends ButtonProps {
  loading: boolean
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  loading,
  ...otherProps
}) => {
  const content = useMemo(() => {
    if (loading)
      return (
        <>
          <Spinner
            animation="border"
            className="mr-2"
            size="sm"
            variant="light"
          />
          Submitting...
        </>
      )
    else return <>Submit</>
  }, [loading])

  return (
    <Button
      block
      className="d-flex align-items-center justify-content-center"
      type="submit"
      {...otherProps}
    >
      {content}
    </Button>
  )
}

export default SubmitButton
