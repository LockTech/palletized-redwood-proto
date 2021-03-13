import { render } from '@redwoodjs/testing'

import ResetButton from './ResetButton'

describe('ResetButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ResetButton />)
    }).not.toThrow()
  })
})
