import { render } from '@redwoodjs/testing'
import { Loading, Empty, Failure, Success } from './ActiveOrderCountCell'
import { standard } from './ActiveOrderCountCell.mock'

describe('activeOrderCountCell', () => {
  it('renders Loading successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })

  it('renders Empty successfully', async () => {
    expect(() => render(<Empty />)).not.toThrow()

    const result = render(<Empty />)
    expect(await result.findAllByText('0')).not.toBeUndefined()
  })

  it('renders Failure successfully', async () => {
    expect(() => {
      render(<Failure error={new Error('Oh no')} />)
    }).not.toThrow()
  })

  // When you're ready to test the actual output of your component render
  // you could test that, for example, certain text is present:
  //
  //   expect(screen.getByText('Hello, world')).toBeInTheDocument()

  it('renders Success successfully', async () => {
    const val = standard().count

    expect(() => <Success count={val} />).not.toThrow()

    const result = render(<Success count={val} />)
    expect(await result.findAllByText(val)).not.toBeUndefined()
  })
})
