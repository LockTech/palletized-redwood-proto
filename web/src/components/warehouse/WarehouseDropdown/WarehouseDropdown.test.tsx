import { render } from '@redwoodjs/testing'

import WarehouseDropdown from './WarehouseDropdown'

describe('WarehouseDropdown', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WarehouseDropdown />)
    }).not.toThrow()
  })
})
