export interface SelectProps {
  label: string
  defaultValue: string[]
  options: string[]
  onChange: (value: string[]) => void
  emptyLabel?: string
}