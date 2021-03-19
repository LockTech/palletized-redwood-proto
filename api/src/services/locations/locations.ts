import { Prisma } from '@prisma/client'
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

import { createWarehouse, warehouse } from 'src/services/warehouses/warehouses'

const MAX_NAME_LEN = 75

const commonExceptions = (input: ILocation) => {
  throwIfIsReserved(input.name, 'Location', 'Name')
  throwIfTooLong(input.name, MAX_NAME_LEN, 'Location', 'Name')
}

const handleCommonLocationErrors = (error) => {
  switch (error.code) {
    case PrismaError.UniqueConstraintViolation: {
      throw new UniqueError({
        Name: [
          'must be unique accross all other Locations at the selected Warehouse.',
        ],
      })
    }

    case PrismaError.RecordDoesNotExist: {
      throw new NoExistError('Product', {
        A: ['Product must exist to be updated.'],
      })
    }

    case PrismaError.ForeignConstraintViolation: {
      throw new NoExistError('Warehouse', {
        An: [
          'error occured while fetching or creating a Warehouse for your Location.',
        ],
        Consider: [
          'retrying or creating the Warehouse, then the Location.',
          'contacting Support if the issue persist.',
        ],
      })
    }

    case PrismaError.InterpretationError: {
      throw new NoExistError('Location', {
        A: ['Location must exist to be deleted.'],
      })
    }
  }
}

const locationDataPrep = async (
  input: ILocation
): Promise<Prisma.LocationUncheckedUpdateInput> => {
  const loc = {
    id: undefined,
    name: undefined,
    warehouseId: undefined,
  }

  let locWarehouse = await warehouse({ id: input.warehouse.id })

  if (locWarehouse === null) {
    try {
      locWarehouse = await createWarehouse({
        input: { id: input.id, name: input.name },
      })
    } catch (err) {
      handleCommonErrors(err)
      handleCommonLocationErrors(err)
      throwUnexpectedError(err)
    }
  }

  loc.warehouseId = locWarehouse.id
  loc.id = locWarehouse.id + '-' + input.name.replaceAll(' ', '-').toLowerCase()
  loc.name = input.name
  return loc
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
export const location = async ({ id }) => {
  try {
    return await db.location.findUnique({
      where: { id },
    })
  } catch (err) {
    handleCommonErrors(err)
    handleCommonLocationErrors(err)
    throwUnexpectedError(err)
  }
}
//

// ==
export const createLocation = async ({ input }: { input: ILocation }) => {
  commonExceptions(input)

  let loc = undefined

  try {
    loc = await locationDataPrep(input)
  } catch (err) {
    handleCommonErrors(err)
    handleCommonLocationErrors(err)
    throwUnexpectedError(err)
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
export const countLocations = async ({ location }) => {
  try {
    return await db.location.count({
      where: {
        ...location,
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
export type UpdateWarehouseInput = {
  id: string
  input: ILocation
}
export const updateLocation = async ({ id, input }: UpdateWarehouseInput) => {
  commonExceptions(input)

  let loc = undefined

  try {
    loc = await locationDataPrep(input)
  } catch (err) {
    handleCommonErrors(err)
    handleCommonLocationErrors(err)
    throwUnexpectedError(err)
  }

  try {
    return await db.location.update({
      where: { id },
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
export const deleteLocation = async ({ id }) => {
  try {
    return await db.location.delete({
      where: { id },
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
