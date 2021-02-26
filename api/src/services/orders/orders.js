import { db } from 'src/lib/db'

export const orders = () => {
  return db.order.findMany()
}

export const Order = {
  pallets: (_obj, { root }) =>
    db.order.findUnique({ where: { id: root.id } }).pallets(),
}
