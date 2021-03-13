import { render } from '@redwoodjs/testing'

import ProductForm from './ProductForm'

describe('ProductForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductForm />)
    }).not.toThrow()
  })
})
