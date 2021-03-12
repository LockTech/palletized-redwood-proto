import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export interface SwitchWarehouseFormProps {
  isActive: boolean
  onClick: (isActive: boolean) => void
  onToggleActive: (isActive: boolean) => void
}

const SwitchWarehouseForm: React.FC<SwitchWarehouseFormProps> = ({
  isActive,
  onClick,
  onToggleActive,
}) => {
  const { register, watch } = useForm({
    mode: 'onChange',
    defaultValues: {
      selectedWarehouses: isActive,
    },
  })

  const watchSelectedWarehouses = watch('selectedWarehouses', isActive)

  useEffect(() => {
    if (watchSelectedWarehouses !== isActive) {
      onToggleActive(watchSelectedWarehouses)
    }
  }, [isActive, onToggleActive, watchSelectedWarehouses])
  return (
    <>
      <Form.Check
        ref={register()}
        className={watchSelectedWarehouses && 'mb-3'}
        id="selectedWarehouses"
        label={
          <span>
            Only include <em>resources</em> found at your Selected Warehouse.
          </span>
        }
        name="selectedWarehouses"
        type="checkbox"
      />
      {watchSelectedWarehouses && (
        <Button
          block
          onClick={() => onClick(isActive)}
          variant="outline-primary"
        >
          Switch Warehouse
        </Button>
      )}
    </>
  )
}

export default SwitchWarehouseForm
