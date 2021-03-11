import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { FormError } from '@redwoodjs/forms'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'

export type WarehouseFormData = {
  name: string
}

export type WarehouseSaveData = WarehouseFormData

export interface WarehouseFormProps {
  resultError?: Error
  resultLoading?: boolean
  onSave: (data: WarehouseSaveData, id?: string) => void
  warehouse: IWarehouse
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

  const onSubmit = useCallback(
    (data: WarehouseFormData) => onSave(data, warehouse?.id),
    [onSave, warehouse]
  )

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
          Submitting...
        </>
      )
    } else {
      return 'Submit'
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

      <Form.Group controlId="createWarehouseForm.name">
        <Form.Label>Warehouse Name</Form.Label>
        <Form.Control
          aria-describedby="createWarehouseForm.nameHelpBlock"
          isInvalid={errors.name !== undefined}
          name="name"
          placeholder="Warehouse Name"
          ref={register({
            maxLength: {
              value: 75,
              message: 'Warehouse Names can be no longer than 75 characters.',
            },
            required: 'A Name is required when creating a Warehouse.',
          })}
        />
        <Form.Text
          className={!errors.name ? 'd-block' : 'd-none'}
          id="createWarehouseForm.nameHelpBlock"
          muted
        >
          A <em>unique</em> name used to identify and search for this Warehouse.
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {errors && errors.name && errors.name.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Button
        block
        className="d-flex align-items-center justify-content-center"
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
