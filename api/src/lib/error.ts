import { UserInputError } from '@redwoodjs/api'
import { PrismaError } from 'prisma-error-enum'

import { reservedCharRegEx } from 'src/lib/stringBuilder'

/**
 * Global error code reference.
 *
 * These errors *SHOULD* appear with any error returned by the system. Errors-codes *SHOULD* be
 * restricted to the **Range** defined below; codes which *do not* fit *SHOULD* be restricted to
 * the `+10000` range.
 *
 * Ranges:
 * * `1000` - `1999`    - User-input error
 * * `2000` - `2999`    - Internal, database Error
 * * `3000` - `3999`    - Application error
 * * ..
 * * `10000+`           - Custom, one-off error-codes.
 *
 * Prefixes:
 * * **ER** - General, system-wide errors.
 * * **LO** - Location errors.
 * * **OR** - Order errors.
 * * **PP** - Pallet-Product errors.
 * * **PR** - Product errors.
 * * **PA** - Pallet errors.
 * * **WA** - Warehouse errors.
 */
export enum PalletizedError {
  // General Errors
  ReservedCharacter = 'ER1000',
}

/**
 * Checks if a would-be model's `name` contains any URI-reserved characters.
 * @param name The value to be checked for reserved characters.
 * @returns `true` if the name contains reserved characters, `false` otherwise.
 */
export const isReserved = (name: string): boolean => {
  if (name.match(reservedCharRegEx) !== null) return true
  else return false
}

/**
 * Checks if a would-be model's `name` contains any URI-reserved characters.
 * Throws a `UserInputError` with identifying `field` as the problematic area.
 * @param name The value to be checked for reserved characters.
 * @param service The name of the service responsible for maintaining access to this model.
 */
export const throwIfIsReserved = (
  name: string,
  service: string,
  field: string
): void => {
  if (isReserved(name)) {
    throw new UserInputError(`Unknown character in ${service} ${field}.`, {
      code: PalletizedError.ReservedCharacter,
      messages: {
        It: [
          'may only contain: dashes, letters, numbers, spaces, and characters not listed below.',
          `cannot contain any of: : / ? # [ ] @ ! $ & ' ( ) * + , ; = " < > % { } | \\ ^ \``,
        ],
      },
    })
  }

  return
}

/**
 * Throws a `UserInputError` if `str.length` is greater than `maxLen`.
 *
 * Returns void otherwise.
 * @param str The `string` whose length is being validated.
 * @param maxLen The length at which to throw an error.
 * @param service An associative name for `str` to provide context to error-consumers.
 */
export const throwIfTooLong = (
  str: string,
  maxLen: number,
  service: string,
  field: string
) => {
  if (str.length > maxLen) {
    throw new UserInputError(
      `${service} ${field} can be no longer than ${maxLen} characters.`,
      {
        messages: {
          Its: [`length is ${str.length} characters.`],
        },
      }
    )
  }

  return
}

export class UniqueError extends UserInputError {
  constructor(properties: Record<string, string[]>) {
    console.log(properties)
    super('One or more fields are not unique to your organization.', {
      messages: properties,
    })
  }
}

export class NoExistError extends UserInputError {
  constructor(resourceName: string, properties: Record<string, string[]>) {
    super(
      `A referenced ${resourceName} does not exist for your organization.`,
      {
        messages: properties,
      }
    )
  }
}

export type PrismaErrorType = {
  code: string
  clientVersion: string
  meta: {
    target: string[]
  }
}

/**
 * Provides error-handling for errors which are likely to be encountered on any service.
 *
 * Will throw a properly formatted `UserInputError` for consumption by frontends.
 * @param error A [`PrismaError`](https://www.prisma.io/docs/reference/api-reference/error-reference#prismaclientknownrequesterror)
 */
export const handleCommonErrors = (error: PrismaErrorType) => {
  switch (error.code) {
    case PrismaError.ConnectionTimedOut: {
      throw new UserInputError(
        'An internal error occured while processing your request.',
        {
          messages: {
            'Error:': ['Connection to DB has timed out.'],
            Consider: [
              'trying to re-submit your request.',
              'reporting this error to Support if it continues.',
            ],
          },
        }
      )
    }
    case PrismaError.TimedOutFetchingConnectionFromThePool: {
      throw new UserInputError(
        'An internal error occured while processing your request.',
        {
          messages: {
            'Error:': ['Could not retrieve pooled-connection to DB.'],
            Consider: [
              'trying to re-submit your request.',
              'reporting this error to Support if it continues.',
            ],
          },
        }
      )
    }
  }
}

export type UnexpectedError = Error & PrismaErrorType
/**
 * Handles formatting and throwing a `UserInputError` for un-expected (un-handled) errors.
 * @param error An `Error` or  [`PrismaError`](https://www.prisma.io/docs/reference/api-reference/error-reference#prismaclientknownrequesterror)
 */
export const throwUnexpectedError = (error: UnexpectedError) => {
  // FIXME
  console.log(error)

  const errorMsg = []

  error.message && errorMsg.push(error.message)
  error.code && errorMsg.push(`Encountered error-code: ${error.code}`)

  throw new UserInputError(
    'An unexpected internal error occured while processing your request.',
    {
      messages: {
        // 'Error:': errorMsg,
        Consider: [
          'trying to re-submit your request.',
          'reporting this error to Support, with the error-code above.',
        ],
      },
    }
  )
}
