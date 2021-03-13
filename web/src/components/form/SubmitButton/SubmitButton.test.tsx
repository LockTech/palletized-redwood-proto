import { render } from '@redwoodjs/testing'

import SubmitButton from './SubmitButton'

describe('SubmitButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SubmitButton />)
    }).not.toThrow()
  })
})
