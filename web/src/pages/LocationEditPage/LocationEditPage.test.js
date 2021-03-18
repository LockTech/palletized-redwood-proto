import { render } from '@redwoodjs/testing'

import LocationEditPage from './LocationEditPage'

describe('LocationEditPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LocationEditPage />)
    }).not.toThrow()
  })
})
