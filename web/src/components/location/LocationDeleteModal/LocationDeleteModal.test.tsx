import { render } from '@redwoodjs/testing'

import LocationDeleteModal from './LocationDeleteModal'

describe('LocationDeleteModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LocationDeleteModal />)
    }).not.toThrow()
  })
})
