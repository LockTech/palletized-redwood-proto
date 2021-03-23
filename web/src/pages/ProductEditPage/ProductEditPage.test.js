import { render } from '@redwoodjs/testing'

import ProductEditPage from './ProductEditPage'

describe('ProductEditPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductEditPage />)
    }).not.toThrow()
  })
})
