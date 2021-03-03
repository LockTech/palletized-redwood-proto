import { render } from '@redwoodjs/testing'

import WarehouseCard from './WarehouseCard'

describe('WarehouseCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WarehouseCard />)
    }).not.toThrow()
  })
})
