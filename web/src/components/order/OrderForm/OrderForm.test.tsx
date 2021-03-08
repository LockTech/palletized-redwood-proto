import { render } from '@redwoodjs/testing'

import OrderForm from './OrderForm'

describe('OrderForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrderForm />)
    }).not.toThrow()
  })
})
