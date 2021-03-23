import { render } from '@redwoodjs/testing'

import ProductDropdown from './PalletDropdown'

describe('ProductDropdown', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductDropdown />)
    }).not.toThrow()
  })
})
