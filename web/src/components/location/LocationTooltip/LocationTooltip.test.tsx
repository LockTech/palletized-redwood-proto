import { render } from '@redwoodjs/testing'

import LocationTooltip from './LocationTooltip'

describe('LocationTooltip', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LocationTooltip />)
    }).not.toThrow()
  })
})
