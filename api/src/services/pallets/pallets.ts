import { db } from 'src/lib/db'
import { handleCommonErrors, throwUnexpectedError } from 'src/lib/error'

// ==
export const pallets = () => {
  return db.pallet.findMany()
}
//

// ==
export const pallet = ({ id }) => {
  return db.pallet.findUnique({ where: { id } })
}
//

// ==
export const palletCountForOrder = async ({ orderId, pallet }) => {
  try {
    return await db.pallet.count({
      where: {
        ...pallet,
        orderId: orderId,
      },
    })
  } catch (err) {
    handleCommonErrors(err)
    throwUnexpectedError(err)
  }
}
//

// ==
export const Pallet = {
  location: (_obj, { root }) =>
    db.pallet.findUnique({ where: { id: root.id } }).location(),
  order: (_obj, { root }) =>
    db.pallet.findUnique({ where: { id: root.id } }).order(),
  PalletProduct: (_obj, { root }) =>
    db.pallet.findUnique({ where: { id: root.id } }).palletProducts(),
}
//
