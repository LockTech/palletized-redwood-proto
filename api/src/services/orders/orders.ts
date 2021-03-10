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

const commonExceptions = (input: IOrder) => {
  throwIfIsReserved(input.orderNumber, 'Order', 'Number')
  throwIfTooLong(input.orderNumber, MAX_ORDER_NUMBER_LEN, 'Order', 'Number')

  if (input.jobName !== undefined) {
    throwIfTooLong(input.jobName, MAX_JOB_NAME_LEN, 'Order', 'Job Name')
  }
}

const handleCommonOrderErrors = (error) => {
  switch (error.code) {
    case PrismaError.UniqueConstraintViolation: {
      throw new UserInputError(
        'One or more fields are not unique to your organization.',
        {
          messages: {
            'Order Number': ['must be unique accross all other Orders.'],
            'Job Name': ['must be unique accross all other Orders.'],
          },
        }
      )
    }
  }
}

// ==
export const orders = ({ warehouseId }) => {
  if (!warehouseId) return db.order.findMany()
  else
    return db.order.findMany({
      where: {
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
export const order = ({ id }) => {
  return db.order.findUnique({ where: { id } })
}
//

// ==
export const createOrder = async ({ input }: { input: IOrder }) => {
  commonExceptions(input)

  input.id = input.orderNumber.replaceAll(' ', '-').toLowerCase()

  try {
    return await db.order.create({
      data: input,
    })
  } catch (err) {
    handleCommonErrors(err)
    handleCommonOrderErrors(err)
    throwUnexpectedError(err)
  }
}
//

// ==
export const orderCountInWarehouse = async ({ warehouseId, order }) => {
  try {
    return await db.order.count({
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
  } catch (err) {
    handleCommonErrors(err)
    throwUnexpectedError(err)
  }
}
//

// ==
type UpdateOrderParams = {
  id: string
  input: IOrder
}
export const updateOrder = async ({ id, input }: UpdateOrderParams) => {
  commonExceptions(input)

  input.id = input.orderNumber.replaceAll(' ', '-').toLowerCase()

  try {
    return await db.order.update({
      data: input,
      where: {
        id,
      },
    })
  } catch (err) {
    handleCommonErrors(err)
    handleCommonOrderErrors(err)

    switch (err.code) {
      case PrismaError.RecordDoesNotExist: {
        throw new UserInputError(`Could not find Order ${id}.`, {
          messages: {
            An: ['Order must exist in order to be updated.'],
          },
        })
      }

      default: {
        throwUnexpectedError(err)
      }
    }
  }
}
//

// ==
export const deleteOrder = ({ id }) => {
  return db.order.delete({
    where: { id },
  })
}
//

// ==
export const Order = {
  pallets: (_obj, { root }) =>
    db.order.findUnique({ where: { id: root.id } }).pallets(),
}
//
