import { FC, useCallback, useState } from "react"

import { MenuProviderProps } from "./types"
import { MenuContext } from "./MenuContext"
import { MenuWrapper } from "./MenuWrapper"


import './Menu.css'

const className = 'menu-provider'



export const MenuProvider: FC<MenuProviderProps> = ({children}) => {

  const [visible, setVisible] = useState(false)

  const handleClose = useCallback(() => setVisible(false), [])
  const handleOpen = useCallback(() => setVisible(true), [])

  return <MenuContext.Provider
    value={{
      open: handleOpen,
      close: handleClose
    }}
  >
    <div className={className + '__rest' + (visible && '_hidden')}>
      {children}
    </div>
    {visible && <MenuWrapper/>}
  </MenuContext.Provider>
}