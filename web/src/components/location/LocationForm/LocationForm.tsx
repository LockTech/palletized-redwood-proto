import { useCallback } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useQuery } from '@redwoodjs/web'
import Form from 'react-bootstrap/Form'

import FormAlert from 'src/components/form/FormAlert/FormAlert'
import SubmitButton from 'src/components/form/SubmitButton/SubmitButton'
import ResetButton from 'src/components/form/ResetButton/ResetButton'
import Select from 'src/components/form/CreatableSelect/CreatableSelect'

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
  error?: Error
  loading?: boolean
}

const LocationForm: React.FC<LocationFormProps> = ({
  onSave,
  location,
  error,
  loading,
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
      <FormAlert error={error} />

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
          {errors?.name?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="createLocationForm.warehouse">
        <Form.Label>Warehouse</Form.Label>
        <Controller
          control={control}
          name="warehouse"
          rules={{
            maxLength: {
              value: 75,
              message: 'Warehouse names can be no longer than 75 characters.',
            },
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
          The Warehouse which this Location will belong to.
        </Form.Text>
        <Form.Text
          className={
            !errors.warehouse && !warehousesError ? 'd-block' : 'd-none'
          }
          id="createLocationForm.warehouseHelpBlock"
          muted
        >
          Entering a non-existant Warehouse will create one with the name given.
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {errors?.warehouse?.value?.message}
        </Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          {warehousesError && warehousesError.message}
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

export default LocationForm
