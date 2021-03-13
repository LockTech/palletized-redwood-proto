import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { FormError } from '@redwoodjs/forms'
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'

import SubmitButton from 'src/components/form/SubmitButton/SubmitButton'
import ResetButton from 'src/components/form/ResetButton/ResetButton'

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

      <SubmitButton
        disabled={resultLoading || !isValid || !isDirty}
        loading={resultLoading}
      />
      <ResetButton reset={reset} />
    </Form>
  )
}

export default WarehouseForm
