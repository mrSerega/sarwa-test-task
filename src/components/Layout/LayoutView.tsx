import { FC } from "react"
import { Burger } from "../../icons"

import { Button } from '../controls/Button'
import { LayoutViewProps } from "./types"

import './Layout.css'

const className = 'layout'

export const LayoutView: FC<LayoutViewProps> = ({onMenuClick, children}) => <div className={className}>
    <div className={className + '__header'}>
      <div className={className + '__logo'}>
        DEPT
      </div>
      <Button label='MENU' onClick={onMenuClick} icon={Burger} size="small" />
    </div>
    {children}
  </div>
