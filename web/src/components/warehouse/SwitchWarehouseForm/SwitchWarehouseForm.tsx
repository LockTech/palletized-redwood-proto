import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export interface SwitchWarehouseFormProps {
  isActive: boolean
  onClick: (isActive: boolean) => void
  onToggleActive: (isActive: boolean) => void
  /**
   * Provide further clarification as to which *resource* is being filtered.
   */
  resourceName?: string
}

/**
 * Utility component for providing easy-to-configure "Include only 'resource' which belong to their Default Warehouse" detection.
 *
 * When `isActive` is set to `true`, a `<Button>` will be included to prompt the user to switch their Warehouse.
 */
const SwitchWarehouseForm: React.FC<SwitchWarehouseFormProps> = ({
  isActive,
  onClick,
  onToggleActive,
  resourceName,
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
          <span className="user-select-none">
            Only include <em>{resourceName || 'resources'}</em> found at your
            Default Warehouse.
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
