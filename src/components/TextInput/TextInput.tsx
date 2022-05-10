import { ChangeEvent, FC, useCallback } from 'react'
import { TextInputTestId } from './constants';

import { TextInputProps } from "./types";

export const TextInput: FC<TextInputProps> = ({
  value,
  onChange
}) => {
  const handleChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => onChange(evt.target.value), [onChange])
  return <input data-testid={TextInputTestId} value={value} onChange={handleChange} />
}