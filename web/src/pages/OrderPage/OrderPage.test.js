import { render } from '@redwoodjs/testing'

import OrderPage from './OrderPage'

describe('OrderPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrderPage />)
    }).not.toThrow()
  })
})
