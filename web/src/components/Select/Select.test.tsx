import { render } from '@redwoodjs/testing'

import Select from './Select'

describe('Select', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Select />)
    }).not.toThrow()
  })
})
