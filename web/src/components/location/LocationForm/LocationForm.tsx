import { useCallback, useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { FormError } from '@redwoodjs/forms'
import { useQuery } from '@redwoodjs/web'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'

import Select from 'src/components/CreatableSelect/CreatableSelect'

const LOCATION_GET_WAREHOUSES = gql`
  query LocationGetWarehouses {
    warehouses {
      label: name
      value: id
    }
  }
`

export type LocationFormData = {
  name: string
  warehouse: {
    label: string
    value: string
  }
}

export type LocationSaveData = {
  name: string
  warehouse: IWarehouse
}

export interface LocationFormProps {
  onSave: (data: LocationSaveData, id?: string) => void
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
    (data: LocationFormData) =>
      onSave(
        {
          name: data.name,
          warehouse: {
            id: data.warehouse.value,
            name: data.warehouse.label,
          },
        },
        location?.id
      ),
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

  const selectComp = useCallback(
    (field, state) => (
      <Select
        field={field}
        isLoading={warehousesLoading}
        options={warehousesList?.warehouses}
        state={state}
      />
    ),
    [warehousesList, warehousesLoading]
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
          rules={{
            required: 'A Warehouse is required when creating a Location.',
          }}
          render={selectComp}
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
