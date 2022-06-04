import { FC } from "react"
import { LayoutView } from "./LayoutView"
import { LayoutWrapperProps } from "./types"

export const LayoutWrapper: FC<LayoutWrapperProps> = ({ children }) => {
  return <LayoutView onMenuClick={() => console.log('MENU CLICK!')}>{children}</LayoutView>
}