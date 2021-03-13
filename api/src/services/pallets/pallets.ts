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
export const palletCount = async ({ orderId, pallet }) => {
  const orderQuery = !orderId ? null : { orderId: orderId }

  try {
    return await db.pallet.count({
      where: {
        ...pallet,
        ...orderQuery,
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
