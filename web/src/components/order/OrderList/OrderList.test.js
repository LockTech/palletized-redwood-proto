import { render } from '@redwoodjs/testing'

import OrderList from './OrderList'

describe('OrderList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrderList />)
    }).not.toThrow()
  })
})
