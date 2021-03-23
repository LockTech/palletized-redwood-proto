import { render } from '@redwoodjs/testing'

import PalletListPage from './PalletListPage'

describe('PalletListPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PalletListPage />)
    }).not.toThrow()
  })
})
