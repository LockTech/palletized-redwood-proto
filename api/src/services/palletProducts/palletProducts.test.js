import { palletProducts } from './palletProducts'

describe('palletProducts', () => {
  scenario('returns all palletProducts', async (scenario) => {
    const result = await palletProducts()

    expect(result.length).toEqual(Object.keys(scenario.palletProduct).length)
  })
})
