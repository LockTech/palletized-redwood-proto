import { render } from '@redwoodjs/testing'

import CreatableSelect from './CreatableSelect'

describe('CreatableSelect', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreatableSelect />)
    }).not.toThrow()
  })
})
