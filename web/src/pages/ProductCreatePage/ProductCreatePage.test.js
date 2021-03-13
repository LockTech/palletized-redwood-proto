import { render } from '@redwoodjs/testing'

import ProductCreatePage from './ProductCreatePage'

describe('ProductCreatePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductCreatePage />)
    }).not.toThrow()
  })
})
