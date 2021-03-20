import { render } from '@redwoodjs/testing'

import ProductTooltip from './ProductTooltip'

describe('ProductTooltip', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductTooltip />)
    }).not.toThrow()
  })
})
