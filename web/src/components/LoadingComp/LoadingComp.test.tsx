import { render } from '@redwoodjs/testing'

import LoadingComp from './LoadingComp'

describe('LoadingComp', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoadingComp />)
    }).not.toThrow()
  })

  it('uses default properties', () => {
    const comp = render(<LoadingComp />).container.getElementsByClassName(
      'spinner-grow text-primary'
    )

    expect(comp.item(0)).not.toBeNull()
  })

  it('accepts override props', () => {
    const comp = render(
      <LoadingComp spinnerProps={{ animation: 'border', variant: 'success' }} />
    ).container.getElementsByClassName('spinner-border text-success')

    expect(comp.item(0)).not.toBeNull()
  })
})
