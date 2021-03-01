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
