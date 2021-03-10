import { render } from '@redwoodjs/testing'

import LocationDropdown from './LocationDropdown'

describe('LocationDropdown', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LocationDropdown />)
    }).not.toThrow()
  })
})
