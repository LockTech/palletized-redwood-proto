import { render } from '@redwoodjs/testing'

import PalletCreatePage from './PalletCreatePage'

describe('PalletCreatePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PalletCreatePage />)
    }).not.toThrow()
  })
})
