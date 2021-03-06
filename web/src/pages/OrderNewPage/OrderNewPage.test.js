import { render } from '@redwoodjs/testing'

import OrderNewPage from './OrderNewPage'

describe('OrderNewPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrderNewPage />)
    }).not.toThrow()
  })
})
