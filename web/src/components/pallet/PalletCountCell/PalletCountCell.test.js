import { render } from '@redwoodjs/testing'
import { Loading, Empty, Failure, Success } from './PalletCountCell'
import { standard } from './PalletCountCell.mock'

describe('activePalletCountCell', () => {
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

  it('renders Success successfully', async () => {
    const val = standard().count
    const successComp = <Success count={val} />

    expect(() => successComp).not.toThrow()

    const result = render(successComp)
    expect(await result.findAllByText(val)).not.toBeUndefined()
  })
})
