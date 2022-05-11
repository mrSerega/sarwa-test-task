import { FC } from 'react'

import { ButtonProps } from './types'

export const Button: FC<ButtonProps> = ({
  label,
  onClick
}) => (<button onClick={() => onClick()}>
    {label}
  </button>)