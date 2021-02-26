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
      input: { name: 'String6975498', updatedAt: '2021-02-26T18:52:47Z' },
    })

    expect(result.name).toEqual('String6975498')
    expect(result.updatedAt).toEqual('2021-02-26T18:52:47Z')
  })

  scenario('updates a warehouse', async (scenario) => {
    const original = await warehouse({ id: scenario.warehouse.one.id })
    const result = await updateWarehouse({
      id: original.id,
      input: { name: 'String70731852' },
    })

    expect(result.name).toEqual('String70731852')
  })

  scenario('deletes a warehouse', async (scenario) => {
    const original = await deleteWarehouse({ id: scenario.warehouse.one.id })
    const result = await warehouse({ id: original.id })

    expect(result).toEqual(null)
  })
})
