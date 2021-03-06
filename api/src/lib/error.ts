import { UserInputError } from '@redwoodjs/api'
import { reservedCharRegEx } from 'src/lib/stringBuilder'

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
