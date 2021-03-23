import { render } from '@redwoodjs/testing'

import ProductTooltip from './PalletTooltip'

describe('ProductTooltip', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductTooltip />)
    }).not.toThrow()
  })
})
