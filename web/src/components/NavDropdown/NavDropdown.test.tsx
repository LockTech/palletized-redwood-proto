import { render } from '@redwoodjs/testing'

import Dropdown from './NavDropdown'

describe('Dropdown', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Dropdown />)
    }).not.toThrow()
  })
})
