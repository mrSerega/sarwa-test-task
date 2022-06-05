import { FC, useContext } from "react"

import { MenuContext } from "../Menu"

import { LayoutView } from "./LayoutView"
import { LayoutWrapperProps } from "./types"

export const LayoutWrapper: FC<LayoutWrapperProps> = ({ children }) => {
  const { open } = useContext(MenuContext)
  return <LayoutView onMenuClick={open}>{children}</LayoutView>
}