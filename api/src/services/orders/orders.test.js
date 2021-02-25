import { orders, order, createOrder, updateOrder, deleteOrder } from './orders'

describe('orders', () => {
  scenario('returns all orders', async (scenario) => {
    const result = await orders()

    expect(result.length).toEqual(Object.keys(scenario.order).length)
  })

  scenario('returns a single order', async (scenario) => {
    const result = await order({ id: scenario.order.one.id })

    expect(result).toEqual(scenario.order.one)
  })

  scenario('creates a order', async (scenario) => {
    const result = await createOrder({
      input: { name: 'String', updatedAt: '2021-02-25T22:57:08Z' },
    })

    expect(result.name).toEqual('String')
    expect(result.updatedAt).toEqual('2021-02-25T22:57:08Z')
  })

  scenario('updates a order', async (scenario) => {
    const original = await order({ id: scenario.order.one.id })
    const result = await updateOrder({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a order', async (scenario) => {
    const original = await deleteOrder({ id: scenario.order.one.id })
    const result = await order({ id: original.id })

    expect(result).toEqual(null)
  })
})
