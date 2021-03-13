import { ControllerRenderProps, InputState } from 'react-hook-form'
import Select from 'react-select/creatable'

export type CreatableOptions = {
  label: string
  value: string
}

export interface CreatableSelectProps {
  field: ControllerRenderProps<Record<string, unknown>>
  isLoading: boolean
  options: CreatableOptions[]
  state: InputState
}

const CreatableSelect: React.FC<CreatableSelectProps> = ({
  field,
  isLoading,
  options,
  state,
  ...otherProps
}) => {
  return (
    <Select
      {...otherProps}
      {...field}
      {...state}
      defaultOptions
      isLoading={isLoading}
      options={options}
    />
  )
}

export default CreatableSelect
