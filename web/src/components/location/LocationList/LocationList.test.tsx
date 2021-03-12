import { render } from '@redwoodjs/testing'

import LocationList from './LocationList'

describe('LocationList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LocationList />)
    }).not.toThrow()
  })
})
