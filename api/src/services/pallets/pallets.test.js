import {
  pallets,
  pallet,
  createPallet,
  updatePallet,
  deletePallet,
} from './pallets'

describe('pallets', () => {
  scenario('returns all pallets', async (scenario) => {
    const result = await pallets()

    expect(result.length).toEqual(Object.keys(scenario.pallet).length)
  })

  scenario('returns a single pallet', async (scenario) => {
    const result = await pallet({ id: scenario.pallet.one.id })

    expect(result).toEqual(scenario.pallet.one)
  })

  scenario('creates a pallet', async (scenario) => {
    const result = await createPallet({
      input: {
        name: 'String',
        updatedAt: '2021-02-25T22:57:23Z',
        locationId: 'scenario.pallet.two.locationId',
        orderId: 'scenario.pallet.two.orderId',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.updatedAt).toEqual('2021-02-25T22:57:23Z')
    expect(result.locationId).toEqual('scenario.pallet.two.locationId')
    expect(result.orderId).toEqual('scenario.pallet.two.orderId')
  })

  scenario('updates a pallet', async (scenario) => {
    const original = await pallet({ id: scenario.pallet.one.id })
    const result = await updatePallet({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a pallet', async (scenario) => {
    const original = await deletePallet({ id: scenario.pallet.one.id })
    const result = await pallet({ id: original.id })

    expect(result).toEqual(null)
  })
})
