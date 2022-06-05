import { ChangeEvent, FC, useCallback } from 'react'
import { TextInputTestId } from './constants';

import { TextField } from './styled';
import { TextInputProps } from "./types";

import './TextInput.css'

const className = 'text-field'

export const TextInput: FC<TextInputProps> = ({
  value,
  label,
  warning,
  onChange
}) => {
  const handleChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => onChange(evt.target.value), [onChange])
  return <div className={className}>
      <TextField
        fullWidth
        data-testid={TextInputTestId}
        value={value}
        onChange={handleChange} 
        size='small'
        variant="standard"
        label={label}
      />
      <div className={className + '__warning'}>{warning}</div>
  </div>
}