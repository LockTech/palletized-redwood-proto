import { render } from '@redwoodjs/testing'

import CommonTooltip from './CommonTooltip'

describe('CommonTooltip', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommonTooltip />)
    }).not.toThrow()
  })
})
