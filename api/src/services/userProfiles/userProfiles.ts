import { Prisma } from '@prisma/client'
import { PrismaError } from 'prisma-error-enum'

import { db } from 'src/lib/db'
import {
  handleCommonErrors,
  NoExistError,
  throwUnexpectedError,
  UniqueError,
} from 'src/lib/error'

// const commonExceptions = (input: IWarehouse) => {}

const handleCommonUserProfileErrors = (error) => {
  switch (error.code) {
    case PrismaError.UniqueConstraintViolation: {
      throw new UniqueError({
        Id: ['must be unique accross all other User Profiles.'],
      })
    }

    case PrismaError.ForeignConstraintViolation: {
      throw new NoExistError('Warehouse', {
        An: [
          'error occured while fetching or creating a Default Warehouse for your User Profile.',
        ],
        Consider: [
          'retrying or creating the Warehouse, then the User Profile.',
          'contacting Support if the issue persist.',
        ],
      })
    }

    case PrismaError.RecordDoesNotExist: {
      throw new NoExistError('User Profile', {
        A: ['User Profile must exist to be updated.'],
      })
    }

    case PrismaError.InterpretationError: {
      throw new NoExistError('Location', {
        A: ['Location must exist to be deleted.'],
      })
    }
  }
}

// ==
export const userProfiles = () => {
  return db.userProfile.findMany()
}
//

// ==
export const userProfile = async ({
  id,
}: Prisma.UserProfileWhereUniqueInput) => {
  try {
    return await db.userProfile.findUnique({
      where: { id },
    })
  } catch (err) {
    handleCommonErrors(err)
    handleCommonUserProfileErrors(err)
    throwUnexpectedError(err)
  }
}
//

// ==
type CreateUserProfileInput = {
  input: Prisma.UserProfileCreateInput
}
export const createUserProfile = async ({ input }: CreateUserProfileInput) => {
  try {
    return await db.userProfile.create({
      data: input,
    })
  } catch (err) {
    handleCommonErrors(err)
    handleCommonUserProfileErrors(err)
    throwUnexpectedError(err)
  }
}
//

// ==
type UpdateUserProfileInput = {
  id: string
  input: Prisma.UserProfileUpdateInput
}
export const updateUserProfile = async ({
  id,
  input,
}: UpdateUserProfileInput) => {
  try {
    return await db.userProfile.update({
      data: input,
      where: { id },
    })
  } catch (err) {
    handleCommonErrors(err)
    handleCommonUserProfileErrors(err)
    throwUnexpectedError(err)
  }
}
//

// ==
export const deleteUserProfile = ({
  id,
}: Prisma.UserProfileWhereUniqueInput) => {
  try {
    return db.userProfile.delete({
      where: { id },
    })
  } catch (err) {
    handleCommonErrors(err)
    handleCommonUserProfileErrors(err)
    throwUnexpectedError(err)
  }
}
//

// ==
export const UserProfile = {
  warehouse: (_obj, { root }) =>
    db.userProfile.findUnique({ where: { id: root.id } }).warehouse(),
}
//
