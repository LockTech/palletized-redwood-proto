import { render } from '@redwoodjs/testing'

import DashLayout from './DashLayout'

describe('DashLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DashLayout />)
    }).not.toThrow()
  })
})
