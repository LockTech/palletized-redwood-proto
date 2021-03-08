import { render } from '@redwoodjs/testing'

import OrderEditPage from './OrderEditPage'

describe('OrderEditPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrderEditPage />)
    }).not.toThrow()
  })
})
