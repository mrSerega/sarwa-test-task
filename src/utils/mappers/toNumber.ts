export const toNumber = (value: unknown): number => {
  if (typeof value !== 'number') {
    throw new Error(`can't cast ${value} to number`)
  }

  return Number(value)
}