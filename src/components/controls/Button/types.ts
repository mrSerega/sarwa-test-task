import { ReactNode } from "react"

export interface ButtonProps {
  label: string
  onClick: () => void

  icon?: ReactNode
  size: "small" | "large"
}
