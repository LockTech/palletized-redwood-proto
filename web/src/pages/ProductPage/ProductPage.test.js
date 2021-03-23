import { render } from '@redwoodjs/testing'

import ProductPage from './ProductPage'

describe('ProductPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductPage />)
    }).not.toThrow()
  })
})
