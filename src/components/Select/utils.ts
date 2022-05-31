export const getLabel = (value: string[], options: string[]) => {
  if (value.length === options.length || value.length === 0) {
    return 'all industries'
  }
  if (value.length === 1) {
    return value[0]
  }
  return value.length
}