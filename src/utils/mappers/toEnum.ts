export const toEnum = <T>(value: unknown, e: object): T => {
  if (typeof value === 'string') {
    for(let val of Object.values(e)) {
      if (val === value) {
        return val
      }
    }
  }
  throw new Error(`can't cast ${value} to enum ${e}`)
}