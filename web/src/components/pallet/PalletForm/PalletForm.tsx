import { useCallback } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useQuery } from '@redwoodjs/web'
import { useRecoilValue } from '@salvoravida/recoil'
import Form from 'react-bootstrap/Form'

import DefaultWarehouseAtom from 'src/atoms/DefaultWarehouseAtom/DefaultWarehouseAtom'

import FormAlert from 'src/components/form/FormAlert/FormAlert'
import SubmitButton from 'src/components/form/SubmitButton/SubmitButton'
import ResetButton from 'src/components/form/ResetButton/ResetButton'
import Select from 'src/components/form/CreatableSelect/CreatableSelect'
import FormRequiredHint from 'src/components/form/FormRequiredHint/FormRequiredHint'

const PALLET_GET_WAREHOUSES = gql`
  query PalletGetWarehouses {
    warehouses {
      label: name
      value: id
    }
  }
`

export type PalletFormData = {
  name: string
  warehouse: {
    label: string
    value: string
  }
}

export type ProductSaveData = {
  name: string
  warehouse: IWarehouse
}

export interface PalletFormProps {
  onSave: (data: ProductSaveData, id?: string) => void
  pallet?: IPallet
  error?: Error
  loading?: boolean
}

const PalletForm: React.FC<PalletFormProps> = ({
  onSave,
  pallet,
  error,
  loading,
}) => {
  const {
    data: warehousesList,
    error: warehousesError,
    loading: warehousesLoading,
  } = useQuery(PALLET_GET_WAREHOUSES)

  const defaultWarehouse = useRecoilValue(DefaultWarehouseAtom)

  const {
    control,
    formState: { errors, isDirty, isValid },
    handleSubmit,
    register,
    reset,
  } = useForm<PalletFormData>({
    mode: 'onChange',
    defaultValues: {
      warehouse:
        pallet?.location?.warehouse !== undefined
          ? {
              value: pallet.location.warehouse.id,
              label: pallet.location.warehouse.id,
            }
          : defaultWarehouse !== undefined
          ? { value: defaultWarehouse.id, label: defaultWarehouse.name }
          : null,
    },
  })

  const onSubmit = useCallback(
    (data: PalletFormData) => {
      onSave(
        {
          name: data.name,
          warehouse: {
            id: data.warehouse.value,
            name: data.warehouse.label,
          },
        },
        pallet?.id
      )
    },
    [onSave, pallet]
  )

  const selectWarehouseComp = useCallback(
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
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <FormAlert error={error} />

      {/* <Form.Group controlId="createPalletForm.partNumber">
        <Form.Label>Part Number *</Form.Label>
        <Form.Control
          aria-describedby="craetePalletForm.partNumberHelpBlock"
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
          id="craetePalletForm.partNumberHelpBlock"
          muted
        >
          A <em>unique</em> name or number used to identify this Product.
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {errors?.partNumber?.message}
        </Form.Control.Feedback>
      </Form.Group> */}

      <Form.Group controlId="createPalletForm.warehouse">
        <Form.Label>Warehouse</Form.Label>
        <Controller
          control={control}
          name="warehouse"
          rules={{
            maxLength: {
              value: 76,
              message: 'Warehouse names can be no longer than 75 characters.',
            },
          }}
          render={selectWarehouseComp}
        />
        <Form.Text
          className={
            !errors.warehouse && !warehousesError ? 'd-block' : 'd-none'
          }
          id="createPalletForm.warehouseHelpBlock"
          muted
        >
          The Warehouse from which Locations are used to tag this Pallet.
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {errors?.warehouse?.value?.message}
        </Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          {warehousesError?.message}
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

export default PalletForm
