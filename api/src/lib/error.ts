import { UserInputError } from '@redwoodjs/api'
import { reservedCharRegEx } from 'src/lib/stringBuilder'

export const commonErrorMessages = {
  name: {
    Names: [
      'may only contain dashes, letters, numbers, and spaces.',
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
 * Throws a `UserInputError` if it does.
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
