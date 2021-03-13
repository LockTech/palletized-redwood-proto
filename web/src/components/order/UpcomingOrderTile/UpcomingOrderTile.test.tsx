import { render } from '@redwoodjs/testing'

import UpcomingOrderTile from './UpcomingOrderTile'

describe('UpcomingOrderTile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UpcomingOrderTile />)
    }).not.toThrow()
  })
})
