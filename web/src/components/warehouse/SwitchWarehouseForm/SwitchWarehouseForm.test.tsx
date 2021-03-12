import { render } from '@redwoodjs/testing'

import SwitchWarehouseForm from './SwitchWarehouseForm'

describe('SwitchWarehouseForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SwitchWarehouseForm />)
    }).not.toThrow()
  })
})
