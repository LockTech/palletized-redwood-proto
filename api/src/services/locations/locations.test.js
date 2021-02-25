import {
  locations,
  location,
  createLocation,
  updateLocation,
  deleteLocation,
} from './locations'

describe('locations', () => {
  scenario('returns all locations', async (scenario) => {
    const result = await locations()

    expect(result.length).toEqual(Object.keys(scenario.location).length)
  })

  scenario('returns a single location', async (scenario) => {
    const result = await location({ id: scenario.location.one.id })

    expect(result).toEqual(scenario.location.one)
  })

  scenario('creates a location', async (scenario) => {
    const result = await createLocation({
      input: {
        name: 'String',
        warehouseId: 'scenario.location.two.warehouseId',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.warehouseId).toEqual('scenario.location.two.warehouseId')
  })

  scenario('updates a location', async (scenario) => {
    const original = await location({ id: scenario.location.one.id })
    const result = await updateLocation({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a location', async (scenario) => {
    const original = await deleteLocation({ id: scenario.location.one.id })
    const result = await location({ id: original.id })

    expect(result).toEqual(null)
  })
})
