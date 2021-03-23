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

const MAX_PART_NUMBER_LEN = 75

const commonExceptions = (input: IProduct) => {
  throwIfIsReserved(input.partNumber, 'Product', 'Part Number')
  throwIfTooLong(
    input.partNumber,
    MAX_PART_NUMBER_LEN,
    'Product',
    'Part Number'
  )
}

const handleCommonProductErrors = (error) => {
  switch (error.code) {
    case PrismaError.UniqueConstraintViolation: {
      throw new UniqueError({
        'Product Number': ['must be unique accross all other Products.'],
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
export const products = async () => {
  try {
    return await db.product.findMany()
  } catch (err) {
    handleCommonErrors(err)
    handleCommonProductErrors(err)
    throwUnexpectedError(err)
  }
}
//

// ==
export const product = async ({ id }: { id: string }) => {
  try {
    return await db.product.findUnique({ where: { id } })
  } catch (err) {
    handleCommonErrors(err)
    handleCommonProductErrors(err)
    throwUnexpectedError(err)
  }
}
//

// ==
export const createProduct = async ({ input }: { input: IProduct }) => {
  commonExceptions(input)

  input.id = input.partNumber.replaceAll(' ', '-').toLowerCase()

  try {
    return await db.product.create({
      data: input,
    })
  } catch (err) {
    handleCommonErrors(err)
    handleCommonProductErrors(err)
    throwUnexpectedError(err)
  }
}
//

// ==
type UpdateProductParams = {
  id: string
  input: IProduct
}
export const updateProduct = async ({ id, input }: UpdateProductParams) => {
  commonExceptions(input)

  input.id = input.partNumber.replaceAll(' ', '-').toLowerCase()

  try {
    return await db.product.update({
      data: input,
      where: {
        id,
      },
    })
  } catch (err) {
    handleCommonErrors(err)
    handleCommonProductErrors(err)
    throwUnexpectedError(err)
  }
}
//

// ==
export const Product = {
  PalletProduct: (_obj, { root }) =>
    db.product.findUnique({ where: { id: root.id } }).palletProducts(),
}
//
