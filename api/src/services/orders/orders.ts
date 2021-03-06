import { UserInputError } from '@redwoodjs/api'
import { db } from 'src/lib/db'
import { throwIfIsReserved, throwIfTooLong } from 'src/lib/error'

const MAX_ORDER_NUMBER_LEN = 75
const MAX_JOB_NAME_LEN = 75

// ==
export const orders = () => {
  return db.order.findMany()
}
//

// ==
export const order = ({ id }) => {
  return db.order.findUnique({ where: { id } })
}
//

// ==
export const createOrder = async ({ input }: { input: IOrder }) => {
  throwIfIsReserved(input.orderNumber, 'Order', 'Number')
  throwIfTooLong(input.orderNumber, MAX_ORDER_NUMBER_LEN, 'Order', 'Number')

  if (input.jobName !== undefined) {
    throwIfTooLong(input.jobName, MAX_JOB_NAME_LEN, 'Order', 'Job Name')
  }

  input.id = input.orderNumber.replaceAll(' ', '-').toLowerCase()

  try {
    return await db.order.create({
      data: input,
    })
  } catch (err) {
    throw new UserInputError('test', {
      messages: {
        Error: [err.code],
      },
    })
  }
}
//

// ==
export const orderCountInWarehouse = ({ warehouseId, order }) => {
  return db.order.count({
    where: {
      ...order,
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
//

// ==
export const Order = {
  pallets: (_obj, { root }) =>
    db.order.findUnique({ where: { id: root.id } }).pallets(),
}
//
