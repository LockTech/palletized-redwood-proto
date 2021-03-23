import { render } from '@redwoodjs/testing'

import PalletDropdown from './PalletDropdown'

describe('PalletDropdown', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PalletDropdown />)
    }).not.toThrow()
  })
})
