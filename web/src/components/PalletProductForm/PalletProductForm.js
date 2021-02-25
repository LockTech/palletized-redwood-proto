import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const PalletProductForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.palletProduct?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="palletId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pallet id
        </Label>
        <TextField
          name="palletId"
          defaultValue={props.palletProduct?.palletId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="palletId" className="rw-field-error" />

        <Label
          name="productId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Product id
        </Label>
        <TextField
          name="productId"
          defaultValue={props.palletProduct?.productId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="productId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PalletProductForm
