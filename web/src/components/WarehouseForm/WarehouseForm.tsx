import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { FormError } from '@redwoodjs/forms'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import Warehouse from '../Warehouse/Warehouse'

export type WarehouseFormData = {
  name: string
}

export interface WarehouseFormProps {
  resultError?: Error
  resultLoading?: boolean
  onSave: (data: WarehouseFormData) => void
  warehouse: Warehouse
}

const WarehouseForm: React.FC<WarehouseFormProps> = ({
  onSave,
  resultError,
  resultLoading,
  warehouse,
}) => {
  const {
    formState: { errors, isDirty, isValid },
    handleSubmit,
    register,
    reset,
  } = useForm<WarehouseFormData>({
    mode: 'onChange',
    defaultValues: { name: warehouse ? warehouse.name : '' },
  })

  const onSubmit = (data: WarehouseFormData) => onSave(data)

  const submitButtonChild: React.ReactNode = useMemo(() => {
    if (resultLoading) {
      return (
        <>
          <Spinner
            animation="border"
            className="mr-2"
            size="sm"
            variant="light"
          />
          Creating...
        </>
      )
    } else {
      return 'Create Warehouse'
    }
  }, [resultLoading])

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)} validated={isValid}>
      <Alert className={resultError ? 'd-block' : 'd-none'} variant="danger">
        <FormError
          error={resultError}
          listClassName="mb-0"
          titleClassName="mb-0"
        />
      </Alert>

      <Form.Group controlId="newWarehouseForm.nameInput">
        <Form.Label>Warehouse Name</Form.Label>
        <Form.Control
          aria-describedby="nameHelpBlock"
          isInvalid={errors.name !== undefined}
          name="name"
          placeholder="Warehouse Name"
          ref={register({ required: true })}
        />
        <Form.Text
          className={!errors.name ? 'd-block' : 'd-none'}
          id="nameHelpBlock"
          muted
        >
          A <em>unique</em> name used to identify and search for this Warehouse.
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          A name is <strong>required</strong> when creating a new Warehouse.
        </Form.Control.Feedback>
      </Form.Group>

      <Button
        block
        className="mb-3 d-flex align-items-center justify-content-center"
        disabled={resultLoading || !isValid || !isDirty}
        type="submit"
      >
        {submitButtonChild}
      </Button>
      <Button block variant="outline-secondary" onClick={() => reset()}>
        Reset Fields
      </Button>
    </Form>
  )
}

export default WarehouseForm
