import { render } from '@redwoodjs/testing'

import Notifications from './Notifications'

describe('Notifications', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Notifications />)
    }).not.toThrow()
  })
})
