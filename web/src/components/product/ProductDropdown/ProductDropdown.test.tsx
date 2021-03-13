import { render } from '@redwoodjs/testing'

import ProductDropdown from './ProductDropdown'

describe('ProductDropdown', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductDropdown />)
    }).not.toThrow()
  })
})
