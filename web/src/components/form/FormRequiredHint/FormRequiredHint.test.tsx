import { render } from '@redwoodjs/testing'

import FormRequiredHint from './FormRequiredHint'

describe('FormRequiredHint', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FormRequiredHint />)
    }).not.toThrow()
  })
})
