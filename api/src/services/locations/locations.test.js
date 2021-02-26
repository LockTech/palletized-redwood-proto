import { locations } from './locations'

describe('locations', () => {
  scenario('returns all locations', async (scenario) => {
    const result = await locations()

    expect(result.length).toEqual(Object.keys(scenario.location).length)
  })
})
