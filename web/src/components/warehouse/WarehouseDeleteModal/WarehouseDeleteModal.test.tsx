import { render } from '@redwoodjs/testing'

import WarehouseDeleteModal from './WarehouseDeleteModal'

describe('WarehouseDeleteModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WarehouseDeleteModal />)
    }).not.toThrow()
  })
})
