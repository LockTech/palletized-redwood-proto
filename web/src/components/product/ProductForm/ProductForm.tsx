import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form'

import FormAlert from 'src/components/form/FormAlert/FormAlert'
import SubmitButton from 'src/components/form/SubmitButton/SubmitButton'
import ResetButton from 'src/components/form/ResetButton/ResetButton'

export type ProductFormData = {
  name: string
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
      name: product ? product.name : '',
    },
  })

  const onSubmit = useCallback(
    (data: ProductFormData) => {
      console.log(data)
      onSave(data, product?.id)
    },
    [onSave, product]
  )

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <FormAlert error={error} />

      <Form.Group controlId="createProductForm.name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          aria-describedby="craeteProductForm.nameHelpBlock"
          isInvalid={errors.name !== undefined}
          placeholder="Name"
          name="name"
          ref={register({
            maxLength: {
              value: 75,
              message: 'Product Names can be no longer than 75 characters.',
            },
            required: 'A Name is required when creating a Product',
          })}
        />
        <Form.Text
          className={!errors.name ? 'd-block' : 'd-none'}
          id="craeteProductForm.nameHelpBlock"
          muted
        >
          A <em>unique</em> name used to identify this Product.
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {errors?.name?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <SubmitButton
        disabled={loading || !isValid || !isDirty}
        loading={loading}
      />
      <ResetButton reset={reset} />
    </Form>
  )
}

export default ProductForm
