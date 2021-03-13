import { render } from '@redwoodjs/testing'

import ProductListPage from './ProductListPage'

describe('ProductListPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductListPage />)
    }).not.toThrow()
  })
})
