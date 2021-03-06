/**
 * Converts `options` into a Prisma [equal filter-query](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#equals)
 * to be used as part of a high-level [model query option](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#model-query-options).
 *
 * **Note:** The use of this function is not nessicary as per Prisma's documentation on equal filters.
 * This function serves as an example for queryies which *require* additional formatting.
 *
 * @param options Options to extract query from.
 * @returns A Prisma equal-query for all `options`
 */
export const eqQueryFromOpts = (options: unknown) => {
  if (!options) return null

  const eqObj = {}
  Object.entries(options).forEach((val: [string, unknown]) => {
    eqObj[val[0]] = {
      equals: val[1],
    }
  })

  return eqObj
}
