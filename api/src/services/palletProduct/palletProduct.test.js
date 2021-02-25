import {
  palletProducts,
  palletProduct,
  createPalletProduct,
  updatePalletProduct,
  deletePalletProduct,
} from './palletProducts'

describe('palletProducts', () => {
  scenario('returns all palletProducts', async (scenario) => {
    const result = await palletProducts()

    expect(result.length).toEqual(Object.keys(scenario.palletProduct).length)
  })

  scenario('returns a single palletProduct', async (scenario) => {
    const result = await palletProduct({ id: scenario.palletProduct.one.id })

    expect(result).toEqual(scenario.palletProduct.one)
  })

  scenario('creates a palletProduct', async (scenario) => {
    const result = await createPalletProduct({
      input: {
        palletId: 'scenario.palletProduct.two.palletId',
        productId: 'scenario.palletProduct.two.productId',
        updatedAt: '2021-02-25T23:26:17Z',
      },
    })

    expect(result.palletId).toEqual('scenario.palletProduct.two.palletId')
    expect(result.productId).toEqual('scenario.palletProduct.two.productId')
    expect(result.updatedAt).toEqual('2021-02-25T23:26:17Z')
  })

  scenario('updates a palletProduct', async (scenario) => {
    const original = await palletProduct({ id: scenario.palletProduct.one.id })
    const result = await updatePalletProduct({
      id: original.id,
      input: { palletId: 'scenario.palletProduct.two.palletId' },
    })

    expect(result.palletId).toEqual('scenario.palletProduct.two.palletId')
  })

  scenario('deletes a palletProduct', async (scenario) => {
    const original = await deletePalletProduct({
      id: scenario.palletProduct.one.id,
    })

    const result = await palletProduct({ id: original.id })

    expect(result).toEqual(null)
  })
})
