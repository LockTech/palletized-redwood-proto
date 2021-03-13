import { FormError } from '@redwoodjs/forms'
import Alert from 'react-bootstrap/Alert'

export interface FormAlertProps {
  error: Error
}

const FormAlert: React.FC<FormAlertProps> = ({ error }) => {
  return (
    <Alert className={error ? 'd-block' : 'd-none'} variant="danger">
      <FormError error={error} listClassName="mb-0" titleClassName="mb-0" />
    </Alert>
  )
}

export default FormAlert
