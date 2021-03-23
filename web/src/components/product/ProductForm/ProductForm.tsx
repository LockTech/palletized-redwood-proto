import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form'

import FormAlert from 'src/components/form/FormAlert/FormAlert'
import SubmitButton from 'src/components/form/SubmitButton/SubmitButton'
import ResetButton from 'src/components/form/ResetButton/ResetButton'
import FormRequiredHint from 'src/components/form/FormRequiredHint/FormRequiredHint'

export type ProductFormData = {
  partNumber: string
  description: string
}

export type ProductSaveData = ProductFormData

export interface ProductFormProps {
  onSave: (data: ProductSaveData, id?: string) => void
  product?: IProduct
  error?: Error
  loading?: boolean
}

const ProductForm: React.FC<ProductFormProps> = ({
  onSave,
  product,
  error,
  loading,
}) => {
  const {
    formState: { errors, isDirty, isValid },
    handleSubmit,
    register,
    reset,
  } = useForm<ProductFormData>({
    mode: 'onChange',
    defaultValues: {
      partNumber: product ? product.partNumber : '',
      description: product ? product.description : '',
    },
  })

  const onSubmit = useCallback(
    (data: ProductFormData) => {
      onSave(data, product?.id)
    },
    [onSave, product]
  )

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <FormAlert error={error} />

      <Form.Group controlId="createProductForm.partNumber">
        <Form.Label>Part Number *</Form.Label>
        <Form.Control
          aria-describedby="craeteProductForm.partNumberHelpBlock"
          isInvalid={errors.partNumber !== undefined}
          placeholder="Part Number"
          name="partNumber"
          ref={register({
            maxLength: {
              value: 75,
              message:
                'Product Part Numbers can be no longer than 75 characters.',
            },
            required: 'A Part Numbers is required when creating a Product',
          })}
        />
        <Form.Text
          className={!errors.partNumber ? 'd-block' : 'd-none'}
          id="craeteProductForm.partNumberHelpBlock"
          muted
        >
          A <em>unique</em> name or number used to identify this Product.
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {errors?.partNumber?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="createProductForm.description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          aria-describedby="craeteProductForm.descriptionHelpBlock"
          isInvalid={errors.description !== undefined}
          placeholder="Description"
          name="description"
          ref={register({
            maxLength: {
              value: 75,
              message:
                'Product Part Numbers can be no longer than 75 characters.',
            },
            required: 'A Part Numbers is required when creating a Product',
          })}
        />
        <Form.Text
          className={!errors.description ? 'd-block' : 'd-none'}
          id="craeteProductForm.descriptionHelpBlock"
          muted
        >
          A human-friendly way of identifying this Product.
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {errors?.description?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <FormRequiredHint />

      <SubmitButton
        disabled={loading || !isValid || !isDirty}
        loading={loading}
      />
      <ResetButton reset={reset} />
    </Form>
  )
}

export default ProductForm
