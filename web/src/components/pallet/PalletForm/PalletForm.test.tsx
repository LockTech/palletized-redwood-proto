import { render } from '@redwoodjs/testing'

import PalletForm from './PalletForm'

describe('ProductForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PalletForm />)
    }).not.toThrow()
  })
})
