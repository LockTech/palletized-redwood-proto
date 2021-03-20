import { render } from '@redwoodjs/testing'

import WarehouseTooltip from './WarehouseTooltip'

describe('WarehouseTooltip', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WarehouseTooltip />)
    }).not.toThrow()
  })
})
