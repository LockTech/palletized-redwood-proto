import { render } from '@redwoodjs/testing'

import LoadingCard from './LoadingCard'

describe('LoadingCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoadingCard />)
    }).not.toThrow()
  })

  it('uses default properties', () => {
    const comp = render(<LoadingCard />).container.getElementsByClassName(
      'spinner-grow text-primary'
    )

    expect(comp.item(0)).not.toBeNull()
  })

  it('accepts override props', () => {
    const comp = render(
      <LoadingCard spinnerProps={{ animation: 'border', variant: 'success' }} />
    ).container.getElementsByClassName('spinner-border text-success')

    expect(comp.item(0)).not.toBeNull()
  })
})
