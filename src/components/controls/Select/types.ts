export interface SelectProps {
  defaultValue: string[]
  options: string[]
  onChange: (value: string[]) => void
  emptyLabel?: string
}