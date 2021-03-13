import { render } from '@redwoodjs/testing'

import ActiveOrderTile from './ActiveOrderTile'

describe('ActiveOrderTile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ActiveOrderTile />)
    }).not.toThrow()
  })
})
