import { PrismaError } from 'prisma-error-enum'

import { db } from 'src/lib/db'
import {
  handleCommonErrors,
  NoExistError,
  throwIfIsReserved,
  throwIfTooLong,
  throwUnexpectedError,
  UniqueError,
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
      throw new UniqueError({
        'Order Number': ['must be unique accross all other Orders.'],
      })
    }

    case PrismaError.RecordDoesNotExist: {
      throw new NoExistError('Order', {
        An: ['Order must exist to be updated.'],
      })
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
export const order = async ({ id }) => {
  try {
    return await db.order.findUnique({ where: { id } })
  } catch (err) {
    handleCommonErrors(err)
    handleCommonOrderErrors(err)
    throwUnexpectedError(err)
  }
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
export const countOrders = async ({ order }) => {
  let query = {}

  // If we're counting-by-some-condition
  if (order) {
    if (order.pallets) {
      query = {
        ...query,
        // Re structuring pallet-condition to meet Prisma requirements
        pallets: {
          some: {
            ...order.pallets,
          },
        },
      }

      delete order.pallets
    }
  }

  query = {
    ...query,
    ...order,
  }

  try {
    return await db.order.count({
      where: {
        ...query,
      },
    })
  } catch (err) {
    handleCommonErrors(err)
    handleCommonOrderErrors(err)
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
    throwUnexpectedError(err)
  }
}
//

// ==
export const deleteOrder = async ({ id }) => {
  try {
    return await db.order.delete({
      where: { id },
    })
  } catch (err) {
    handleCommonErrors(err)
    // handleCommonWarehouseErrors(err) - Does not apply ATM

    switch (err.code) {
      case PrismaError.InterpretationError: {
        throw new NoExistError('Order', {
          An: ['Order must exist to be deleted.'],
        })
      }
    }

    throwUnexpectedError(err)
  }
}
//

// ==
export const Order = {
  pallets: (_obj, { root }) =>
    db.order.findUnique({ where: { id: root.id } }).pallets(),
}
//
