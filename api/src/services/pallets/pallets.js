import { db } from 'src/lib/db'

export const pallets = () => {
  return db.pallet.findMany()
}

export const Pallet = {
  location: (_obj, { root }) =>
    db.pallet.findUnique({ where: { id: root.id } }).location(),
  order: (_obj, { root }) =>
    db.pallet.findUnique({ where: { id: root.id } }).order(),
  PalletProduct: (_obj, { root }) =>
    db.pallet.findUnique({ where: { id: root.id } }).PalletProduct(),
}
