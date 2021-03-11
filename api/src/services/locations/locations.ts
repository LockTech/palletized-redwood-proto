import { UserInputError } from '@redwoodjs/api'
import { PrismaError } from 'prisma-error-enum'
import { db } from 'src/lib/db'
import {
  handleCommonErrors,
  throwIfIsReserved,
  throwIfTooLong,
  throwUnexpectedError,
} from 'src/lib/error'

import { createWarehouse, warehouse } from 'src/services/warehouses/warehouses'

const MAX_NAME_LEN = 75

const commonExceptions = (input: ILocation) => {
  throwIfIsReserved(input.name, 'Location', 'Name')
  throwIfTooLong(input.name, MAX_NAME_LEN, 'Location', 'Name')
}

const handleCommonLocationErrors = (error) => {
  switch (error.code) {
    case PrismaError.UniqueConstraintViolation: {
      throw new UserInputError(
        'One or more fields are not unique to your organization.',
        {
          messages: {
            Name: [
              'must be unique accross all other Locations at the selected Warehouse.',
            ],
          },
        }
      )
    }

    case PrismaError.RecordDoesNotExist: {
      throw new UserInputError(`Could not find Location.`, {
        messages: {
          A: ['Location must exist to be updated.'],
        },
      })
    }
  }
}

// ==
export const locations = () => {
  return db.location.findMany()
}
//

// ==
export const createLocation = async ({ input }: { input: ILocation }) => {
  commonExceptions(input)

  input.id = input.name.replaceAll(' ', '-').toLowerCase()

  const locWarehouse = await warehouse({ id: input.warehouse.id })

  if (!locWarehouse) {
    const wh = input.warehouse
    try {
      await createWarehouse({ input: { id: wh.id, name: wh.name } })
    } catch (err) {
      handleCommonErrors(err)
      handleCommonLocationErrors(err)
      throwUnexpectedError(err)
    }
  }

  try {
    return await db.location.create({
      data: input,
    })
  } catch (err) {
    handleCommonErrors(err)
    handleCommonLocationErrors(err)
    throwUnexpectedError(err)
  }
}
//

// ==
export const Location = {
  warehouse: (_obj, { root }) =>
    db.location.findUnique({ where: { id: root.id } }).warehouse(),
  pallets: (_obj, { root }) =>
    db.location.findUnique({ where: { id: root.id } }).pallets(),
}
//
