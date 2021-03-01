import { db, eqQueryFromOpts } from 'src/lib'

export const orders = () => {
  return db.order.findMany()
}

export const order = ({ id }) => {
  return db.order.findUnique({ where: { id } })
}

export const orderCountInWarehouse = ({ warehouseId, order }) => {
  const query = eqQueryFromOpts(order)

  return db.order.count({
    where: {
      ...query,
      pallets: {
        some: {
          location: {
            warehouseId: {
              equals: warehouseId,
            },
          },
        },
      },
    },
  })
}

export const Order = {
  pallets: (_obj, { root }) =>
    db.order.findUnique({ where: { id: root.id } }).pallets(),
}
