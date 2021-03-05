import { UserInputError } from '@redwoodjs/api'
import { reservedCharRegEx } from 'src/lib/stringBuilder'

/**
 * Common error messages shared by many resources.
 */
export const commonErrorMessages = {
  /**
   * Informs of URI character-code restrictions on a resource's "name".
   *
   * Details on the character-codes's considered restricted can be found [here](https://pretty-rfc.herokuapp.com/RFC3986#reserved).
   */
  name: {
    Names: [
      'may only contain: dashes, letters, numbers, spaces, and characters not listed below.',
      `cannot contain any of: : / ? # [ ] @ ! $ & ' ( ) * + , ; = " < > % { } | \\ ^ \` .`,
    ],
  },
}

/**
 * Checks if a would-be model's `name` contains any URI-reserved characters.
 * @param name The value to be checked for reserved characters.
 * @returns `true` if the name contains reserved characters, `false` otherwise.
 */
export const isNameReserved = (name: string): boolean => {
  if (name.match(reservedCharRegEx) !== null) return true
  else return false
}

/**
 * Checks if a would-be model's `name` contains any URI-reserved characters.
 * Throws a `UserInputError` with `commonErrorMessages.name` if it does.
 * @param name The value to be checked for reserved characters.
 * @param service The name of the service responsible for maintaining access to this model.
 */
export const throwIfNameIsReserved = (name: string, service?: string): void => {
  if (isNameReserved(name)) {
    throw new UserInputError(
      `Unknown character in ${service || 'component'} name.`,
      {
        messages: {
          ...commonErrorMessages.name,
        },
      }
    )
  }

  return
}

/**
 * Throws a `UserInputError` if `str.length` is greater than `maxLen`.
 *
 * Returns void otherwise.
 * @param str The `string` whose length is being validated.
 * @param maxLen The length at which to throw an error.
 * @param componentName An associative name for `str` to provide context to error-consumers.
 */
export const throwIfTooLong = (
  str: string,
  maxLen: number,
  componentName?: string
) => {
  if (str.length > maxLen) {
    throw new UserInputError(
      `${componentName} can be no longer than ${maxLen} characters.`,
      {
        messages: {
          Length: [`is ${maxLen} characters.`],
        },
      }
    )
  }

  return
}
