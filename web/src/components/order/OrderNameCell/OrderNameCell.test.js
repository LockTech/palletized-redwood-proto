import { render } from '@redwoodjs/testing'
import { Loading, Empty, Failure, Success } from './OrderNameCell'
import { standard } from './OrderNameCell.mock'

describe('OrderNameCell', () => {
  it('renders Loading successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })

  it('renders Empty successfully', async () => {
    const val = 'Order Not Found'
    const comp = <Empty />

    expect(() => comp).not.toThrow()

    const result = render(comp)
    expect(await result.findAllByText(val)).not.toBeUndefined()
  })

  it('renders Failure successfully', async () => {
    const val = 'Oh No'
    const comp = <Failure error={new Error(val)} />

    expect(() => comp).not.toThrow()

    const result = render(comp)
    expect(await result.findAllByText(val)).not.toBeUndefined()
  })

  it('renders Success successfully', async () => {
    const val = standard().orderNumber
    const comp = <Success order={standard()} />

    expect(() => comp).not.toThrow()

    const result = render(comp)
    expect(await result.findAllByText(val)).not.toBeUndefined()
  })
})
