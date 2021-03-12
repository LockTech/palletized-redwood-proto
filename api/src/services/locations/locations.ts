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

const commonExceptions = (input: CreateLocationInput) => {
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

    case PrismaError.ForeignConstraintViolation: {
      throw new UserInputError('Could not find Warehouse.', {
        messages: {
          An: [
            'error occured while fetching or creating a Warehouse for this Location.',
          ],
          Consider: [
            'retrying or creating a Warehouse, then a Location.',
            'contacting Support if the issue persist.',
          ],
        },
      })
    }
  }
}

// ==
export const locations = async ({ warehouseId }) => {
  try {
    if (!warehouseId)
      return await db.location.findMany({
        orderBy: {
          name: 'asc',
        },
      })
    else
      return await db.location.findMany({
        orderBy: {
          name: 'asc',
        },
        where: {
          warehouseId,
        },
      })
  } catch (err) {
    handleCommonErrors(err)
    handleCommonLocationErrors(err)
    throwUnexpectedError(err)
  }
}
//

// ==
export type CreateLocationInput = {
  name: string
  warehouseId: string
  warehouseName: string
}
export const createLocation = async ({
  input,
}: {
  input: CreateLocationInput
}) => {
  commonExceptions(input)

  const loc = {
    id: input.name.replaceAll(' ', '-').toLowerCase(),
    name: input.name,
    warehouseId: input.warehouseId,
  }

  let locWarehouse = await warehouse({ id: input.warehouseId })

  console.log(`LOC: ${loc}`)
  console.log(`LOC-WAREHOUSE: ${locWarehouse}`)

  if (locWarehouse === null) {
    try {
      locWarehouse = await createWarehouse({
        input: { id: input.warehouseId, name: input.warehouseName },
      })

      loc.warehouseId = locWarehouse.id
    } catch (err) {
      handleCommonErrors(err)
      handleCommonLocationErrors(err)
      throwUnexpectedError(err)
    }
  }

  try {
    return await db.location.create({
      data: loc,
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
