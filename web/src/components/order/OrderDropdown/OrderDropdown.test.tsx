import { render } from '@redwoodjs/testing'

import OrderDropdown from './OrderDropdown'

describe('OrderDropdown', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrderDropdown />)
    }).not.toThrow()
  })
})
