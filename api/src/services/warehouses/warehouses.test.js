import {
  warehouses,
  warehouse,
  createWarehouse,
  updateWarehouse,
  deleteWarehouse,
} from './warehouses'

describe('warehouses', () => {
  scenario('returns all warehouses', async (scenario) => {
    const result = await warehouses()

    expect(result.length).toEqual(Object.keys(scenario.warehouse).length)
  })

  scenario('returns a single warehouse', async (scenario) => {
    const result = await warehouse({ id: scenario.warehouse.one.id })

    expect(result).toEqual(scenario.warehouse.one)
  })

  scenario('creates a warehouse', async (_scenario) => {
    const result = await createWarehouse({
      input: { name: 'String6458549', updatedAt: '2021-02-25T22:52:36Z' },
    })

    expect(result.name).toEqual('String6458549')
    expect(result.updatedAt).toEqual('2021-02-25T22:52:36Z')
  })

  scenario('updates a warehouse', async (scenario) => {
    const original = await warehouse({ id: scenario.warehouse.one.id })
    const result = await updateWarehouse({
      id: original.id,
      input: { name: 'String96636232' },
    })

    expect(result.name).toEqual('String96636232')
  })

  scenario('deletes a warehouse', async (scenario) => {
    const original = await deleteWarehouse({ id: scenario.warehouse.one.id })
    const result = await warehouse({ id: original.id })

    expect(result).toEqual(null)
  })
})
