import { db } from 'src/lib/db'

export const products = () => {
  return db.product.findMany()
}

export const Product = {
  PalletProduct: (_obj, { root }) =>
    db.product.findUnique({ where: { id: root.id } }).PalletProduct(),
}
