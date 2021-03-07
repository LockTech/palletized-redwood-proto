import { render } from '@redwoodjs/testing'

import OrderNewPage from './OrderCreatePage'

describe('OrderNewPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrderNewPage />)
    }).not.toThrow()
  })
})
