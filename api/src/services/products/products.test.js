import { products } from './products'

describe('products', () => {
  scenario('returns all products', async (scenario) => {
    const result = await products()

    expect(result.length).toEqual(Object.keys(scenario.product).length)
  })
})
