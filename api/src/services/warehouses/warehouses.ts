import { UserInputError } from '@redwoodjs/api'
import { PrismaError } from 'prisma-error-enum'
import { db } from 'src/lib/db'
import {
  handleCommonErrors,
  throwIfIsReserved,
  throwIfTooLong,
  throwUnexpectedError,
} from 'src/lib/error'

const WAREHOUSE_NAME_MAX_LEN = 75

// ==
export const warehouses = () => {
  return db.warehouse.findMany()
}
//

// ==
export const warehouse = ({ id }) => {
  return db.warehouse.findUnique({
    where: { id },
  })
}
//

// ==
export const createWarehouse = async ({ input }: { input: IWarehouse }) => {
  throwIfIsReserved(input.name, 'Warehouse', 'Name')
  throwIfTooLong(input.name, WAREHOUSE_NAME_MAX_LEN, 'Warehouse', 'Name')

  input.id = input.name.replaceAll(' ', '-').toLowerCase()

  try {
    return await db.warehouse.create({
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
              Name: ['must not collide with any other Warehouses.'],
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
export const updateWarehouse = async ({ id, input }) => {
  throwIfIsReserved(input.name, 'Warehouse', 'Name')
  throwIfTooLong(input.name, WAREHOUSE_NAME_MAX_LEN, 'Warehouse', 'Name')

  input.id = input.name.replaceAll(' ', '-').toLowerCase()

  try {
    return await db.warehouse.update({
      data: input,
      where: {
        id,
      },
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
export const deleteWarehouse = ({ id }) => {
  return db.warehouse.delete({
    where: { id },
  })
}
//

// ==
export const Warehouse = {
  locations: (_obj, { root }) =>
    db.warehouse.findUnique({ where: { id: root.id } }).locations(),
}
//
