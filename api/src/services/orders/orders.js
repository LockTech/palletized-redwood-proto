import { db } from 'src/lib/db'

export const orders = () => {
  return db.order.findMany()
}

export const order = ({ id }) => {
  return db.order.findUnique({ where: { id } })
}

export const activeOrderCountInWarehouse = ({ warehouseId }) => {
  return db.order.count({
    where: {
      pallets: {
        some: {
          location: {
            warehouse: {
              id: warehouseId,
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
