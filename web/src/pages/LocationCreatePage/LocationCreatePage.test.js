import { render } from '@redwoodjs/testing'

import LocationCreatePage from './LocationCreatePage'

describe('LocationCreatePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LocationCreatePage />)
    }).not.toThrow()
  })
})
