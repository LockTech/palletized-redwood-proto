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

const MAX_PRODUCT_NAME_LEN = 75

const commonExceptions = (input: IProduct) => {
  throwIfIsReserved(input.name, 'Product', 'Name')
  throwIfTooLong(input.name, MAX_PRODUCT_NAME_LEN, 'Product', 'Name')
}

const handleCommonProductErrors = (error) => {
  switch (error.code) {
    case PrismaError.UniqueConstraintViolation: {
      throw new UniqueError({
        Name: ['must be unique accross all other Products.'],
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
export const products = () => {
  return db.product.findMany()
}
//

// ==
export const createProduct = async ({ input }: { input: IProduct }) => {
  commonExceptions(input)

  input.id = input.name.replaceAll(' ', '-').toLowerCase()

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
export const Product = {
  PalletProduct: (_obj, { root }) =>
    db.product.findUnique({ where: { id: root.id } }).palletProducts(),
}
//
