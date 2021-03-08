import { render } from '@redwoodjs/testing'

import OrderDeleteModal from './OrderDeleteModal'

describe('OrderDeleteModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrderDeleteModal />)
    }).not.toThrow()
  })
})
