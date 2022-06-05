import { ReactNode } from "react"

export interface ButtonProps {
  label: string
  size: "small" | "large"

  onClick: () => void

  disabled?: boolean
  icon?: ReactNode
}
