import { FC } from 'react'

import { Button as MaterialButton } from '@mui/material'

import { ButtonProps } from './types'

import './Button.css'

const className = 'button'

export const Button: FC<ButtonProps> = ({
  label,
  icon,
  size,
  disabled,
  onClick,
}) => (<MaterialButton 
    onClick={onClick} 
    variant={size === "small" ? "text" : "contained"} 
    endIcon={icon} 
    className={className + (disabled ? '_disabled' : '')} 
    size={size} 
    disabled={disabled}
  >
    {label}
  </MaterialButton>)