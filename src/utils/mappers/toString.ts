export const toString = (value: unknown): string => {
  if (typeof value !== 'string') {
    throw new Error(`can't cast ${value} to string`)
  }

  return String(value)
}