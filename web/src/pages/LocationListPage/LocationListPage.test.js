import { render } from '@redwoodjs/testing'

import LocationListPage from './LocationListPage'

describe('LocationListPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LocationListPage />)
    }).not.toThrow()
  })
})
