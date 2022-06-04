import { FC } from 'react'

import { ToggleButton as MaterialToggleButton } from '@mui/material' 

import { ToggleButtonProps } from './types'

import './ToggleButton.css'

const className = 'toggle-button'

export const ToggleButton: FC<ToggleButtonProps> = ({
  onChange,
  value,
  label,
}) => {
  return <MaterialToggleButton 
    selected={value} 
    value="check"
    onChange={() => onChange(!value)}
    size="small"
    className={className}
  >
    {label}
  </MaterialToggleButton>
}