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
      defaultWarehouses: isActive,
    },
  })

  const watchDefaultWarehouses = watch('defaultWarehouses', isActive)

  useEffect(() => {
    if (watchDefaultWarehouses !== isActive) {
      onToggleActive(watchDefaultWarehouses)
    }
  }, [isActive, onToggleActive, watchDefaultWarehouses])
  return (
    <>
      <Form.Check
        ref={register()}
        className={watchDefaultWarehouses && 'mb-3'}
        id="defaultWarehouses"
        label={
          <span>
            Only include <em>resources</em> found at your Selected Warehouse.
          </span>
        }
        name="defaultWarehouses"
        type="checkbox"
      />
      {watchDefaultWarehouses && (
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
