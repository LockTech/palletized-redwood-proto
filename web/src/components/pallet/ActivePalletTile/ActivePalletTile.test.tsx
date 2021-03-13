import { render } from '@redwoodjs/testing'

import ActivePalletTile from './ActivePalletTile'

describe('ActivePalletTile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ActivePalletTile />)
    }).not.toThrow()
  })
})
