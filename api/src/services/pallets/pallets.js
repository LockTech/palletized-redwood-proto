import { db } from 'src/lib/db'

export const pallets = () => {
  return db.pallet.findMany()
}

export const pallet = ({ id }) => {
  return db.pallet.findUnique({
    where: { id },
  })
}

export const createPallet = ({ input }) => {
  return db.pallet.create({
    data: input,
  })
}

export const updatePallet = ({ id, input }) => {
  return db.pallet.update({
    data: input,
    where: { id },
  })
}

export const deletePallet = ({ id }) => {
  return db.pallet.delete({
    where: { id },
  })
}

export const Pallet = {
  location: (_obj, { root }) =>
    db.pallet.findUnique({ where: { id: root.id } }).location(),
  order: (_obj, { root }) =>
    db.pallet.findUnique({ where: { id: root.id } }).order(),
  PalletProducts: (_obj, { root }) =>
    db.pallet.findUnique({ where: { id: root.id } }).PalletProducts(),
}
