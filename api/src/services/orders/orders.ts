import { UserInputError } from '@redwoodjs/api'
import { PrismaError } from 'prisma-error-enum'
import { db } from 'src/lib/db'
import {
  handleCommonErrors,
  throwIfIsReserved,
  throwIfTooLong,
  throwUnexpectedError,
} from 'src/lib/error'

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
    handleCommonErrors(err)

    switch (err.code) {
      case PrismaError.UniqueConstraintViolation: {
        throw new UserInputError(
          'One or more fields are not unique to your organization.',
          {
            messages: {
              'Order Number': ['must not collide with any other Orders.'],
              'Job Name': ['must be unique accross all other Orders'],
            },
          }
        )
      }
      default: {
        throwUnexpectedError(err)
      }
    }
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
