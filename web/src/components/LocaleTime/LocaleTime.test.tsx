import { render } from '@redwoodjs/testing'

import LocaleTime from './LocaleTime'

describe('LocaleTime', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LocaleTime />)
    }).not.toThrow()
  })
})
