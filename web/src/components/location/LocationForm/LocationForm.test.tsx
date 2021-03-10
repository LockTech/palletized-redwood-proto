import { render } from '@redwoodjs/testing'

import LocationForm from './LocationForm'

describe('LocationForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LocationForm />)
    }).not.toThrow()
  })
})
