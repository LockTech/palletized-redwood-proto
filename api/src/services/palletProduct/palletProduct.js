import { db } from 'src/lib/db'

export const palletProducts = () => {
  return db.palletProduct.findMany()
}

export const palletProduct = ({ id }) => {
  return db.palletProduct.findUnique({
    where: { id },
  })
}

export const createPalletProduct = ({ input }) => {
  return db.palletProduct.create({
    data: input,
  })
}

export const updatePalletProduct = ({ id, input }) => {
  return db.palletProduct.update({
    data: input,
    where: { id },
  })
}

export const deletePalletProduct = ({ id }) => {
  return db.palletProduct.delete({
    where: { id },
  })
}

export const PalletProduct = {
  pallet: (_obj, { root }) =>
    db.palletProduct.findUnique({ where: { id: root.id } }).pallet(),
  product: (_obj, { root }) =>
    db.palletProduct.findUnique({ where: { id: root.id } }).product(),
}
