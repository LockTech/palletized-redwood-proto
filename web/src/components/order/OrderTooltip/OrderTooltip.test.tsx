import { render } from '@redwoodjs/testing'

import OrderTooltip from './OrderTooltip'

describe('OrderTooltip', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrderTooltip />)
    }).not.toThrow()
  })
})
