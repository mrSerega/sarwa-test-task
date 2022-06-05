import { FC } from "react"

import { Link } from 'react-router-dom'

import { IconButton } from "@mui/material"

import { Cross } from "../../icons"

import { options } from "./consts"
import { MenuViewProps } from "./types"

import './Menu.css'

const className = 'menu-view'

export const MenuView: FC<MenuViewProps> = ({onClose}) => {
  return <div className={className}>
    <div className={className + '__header'}>
      <div className={className + '__logo'}>
        DEPT
      </div>
      <IconButton onClick={onClose}>
        {Cross}
      </IconButton>
    </div>
    <div className={className + '__options'}>
      {options.map(({label, destination}) => <Link 
        to={destination} 
        key={label} 
        className={className + '__option'}
        onClick={onClose}
      >
        {label}
      </Link>)}
    </div>
  </div>
}