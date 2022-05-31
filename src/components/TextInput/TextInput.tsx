import { ChangeEvent, FC, useCallback } from 'react'
import { TextInputTestId } from './constants';

import { TextInputProps } from "./types";

export const TextInput: FC<TextInputProps> = ({
  value,
  onChange
}) => {
  const handleChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => onChange(evt.target.value), [onChange])
  return <input data-testid={TextInputTestId} type='text' value={value} onChange={handleChange} />
}