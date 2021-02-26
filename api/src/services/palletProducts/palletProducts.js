import { db } from 'src/lib/db'

export const palletProducts = () => {
  return db.palletProduct.findMany()
}

export const PalletProduct = {
  pallet: (_obj, { root }) =>
    db.palletProduct.findUnique({ where: { id: root.id } }).pallet(),
  product: (_obj, { root }) =>
    db.palletProduct.findUnique({ where: { id: root.id } }).product(),
}
