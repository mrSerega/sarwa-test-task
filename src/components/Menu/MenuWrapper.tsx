import { useContext } from "react"

import { MenuContext } from "./MenuContext"
import { MenuView } from "./MenuView"

export const MenuWrapper = () => {
  const {close} = useContext(MenuContext)

  return <MenuView onClose={close}/>
}