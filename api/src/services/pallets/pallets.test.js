import { pallets } from './pallets'

describe('pallets', () => {
  scenario('returns all pallets', async (scenario) => {
    const result = await pallets()

    expect(result.length).toEqual(Object.keys(scenario.pallet).length)
  })
})
