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
    const failureComp = <Failure error={new Error('Oh no')} />

    expect(() => {
      render(failureComp)
    }).not.toThrow()

    const result = render(failureComp)
    expect(await result.findAllByText('-')).not.toBeUndefined()
  })

  // When you're ready to test the actual output of your component render
  // you could test that, for example, certain text is present:
  //
  //   expect(screen.getByText('Hello, world')).toBeInTheDocument()

  it('renders Success successfully', async () => {
    const val = standard().count
    const successComp = <Success count={val} />

    expect(() => successComp).not.toThrow()

    const result = render(successComp)
    expect(await result.findAllByText(val)).not.toBeUndefined()
  })
})
