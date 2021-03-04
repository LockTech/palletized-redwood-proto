import { render } from '@redwoodjs/testing'

import DeleteModal from './DeleteModal'

describe('DeleteModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DeleteModal />)
    }).not.toThrow()
  })
})
