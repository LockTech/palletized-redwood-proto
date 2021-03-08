import { render } from '@redwoodjs/testing'

import OrderDetails from './OrderDetails'

describe('OrderDetails', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrderDetails />)
    }).not.toThrow()
  })
})
