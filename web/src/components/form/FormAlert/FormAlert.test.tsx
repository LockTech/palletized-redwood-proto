import { render } from '@redwoodjs/testing'

import FormAlert from './FormAlert'

describe('FormAlert', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FormAlert />)
    }).not.toThrow()
  })
})
