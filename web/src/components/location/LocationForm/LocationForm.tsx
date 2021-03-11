import { useCallback, useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { FormError } from '@redwoodjs/forms'
import { useQuery } from '@redwoodjs/web'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import Select from 'react-select'

const LOCATION_GET_WAREHOUSES = gql`
  query LocationGetWarehouses {
    warehouses {
      value: id
      label: name
    }
  }
`

export interface LocationFormData {
  name: string
  warehouse: {
    value: string
    label: string
  }
}

export interface LocationFormProps {
  onSave: (data: LocationFormData, id?: string) => void
  location: ILocation
  resultError?: Error
  resultLoading?: boolean
}

const LocationForm: React.FC<LocationFormProps> = ({
  onSave,
  location,
  resultError,
  resultLoading,
}) => {
  const {
    data: warehousesList,
    error: warehousesError,
    loading: warehousesLoading,
  } = useQuery(LOCATION_GET_WAREHOUSES)

  console.log(warehousesLoading)
  console.log(warehousesList)

  const {
    control,
    formState: { errors, isDirty, isValid },
    handleSubmit,
    register,
    reset,
  } = useForm<LocationFormData>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      warehouse: null,
    },
  })

  const onSubmit = useCallback(
    (data: LocationFormData) => onSave(data, location?.id),
    [onSave, location]
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

      <Form.Group controlId="createLocationForm.name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          aria-describedby="createLocationForm.nameHelpBlock"
          isInvalid={errors.name !== undefined}
          placeholder="Name"
          name="name"
          ref={register({
            maxLength: {
              value: 75,
              message: 'Location Names can be no longer than 75 characters.',
            },
            required: 'A Name is required when creating a Location.',
          })}
        />
        <Form.Text
          className={!errors.name ? 'd-block' : 'd-none'}
          id="createLocationForm.nameHelpBlock"
          muted
        >
          A <em>unique</em> name used to identify this Location.
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {errors && errors.name && errors.name.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="createLocationForm.warehouse">
        <Form.Label>Warehouse</Form.Label>
        <Controller
          control={control}
          name="warehouse"
          render={({ name, onChange, ref, value }) => (
            <Select
              aria-labelledby="createLocationForm.warehouseHelpBlock"
              defaultOptions
              isLoading={warehousesLoading}
              name={name}
              onChange={onChange}
              options={warehousesList?.warehouses}
              ref={ref}
              value={value}
            />
          )}
        />
        <Form.Text
          className={
            !errors.warehouse && !warehousesError ? 'd-block' : 'd-none'
          }
          id="createLocationForm.warehouseHelpBlock"
          muted
        >
          The Warehouse which this Location belong to.
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {errors && errors.warehouse && errors.warehouse.value.message}
        </Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          {warehousesError && warehousesError.message}
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

export default LocationForm
