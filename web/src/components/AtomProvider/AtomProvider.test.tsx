import { render } from '@redwoodjs/testing'

import AtomProvider from './AtomProvider'

describe('AtomProvider', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AtomProvider />)
    }).not.toThrow()
  })
})
