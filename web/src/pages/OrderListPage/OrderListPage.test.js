import { render } from '@redwoodjs/testing'

import OrderListPage from './OrderListPage'

describe('OrderListPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrderListPage />)
    }).not.toThrow()
  })
})
