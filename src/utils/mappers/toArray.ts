export const toArray = <T>(value: any): T[]  => {
  if (Array.isArray(value)) {
    return value
  }
  throw new Error(`can't cast ${value} to array`)
}