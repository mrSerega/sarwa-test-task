export interface SelectProps {
  initialValue: string[]
  options: string[]
  onChange: (value: string[]) => void
}