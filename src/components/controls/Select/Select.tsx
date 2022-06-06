import { FC, useCallback, useState } from 'react'

import { MenuItem, Select as MaterialSelect, SelectChangeEvent, FormControl, InputLabel } from '@mui/material';

import { SelectProps } from "./types";
import { DEFAULT_EMPTY_LABEL } from './consts';

const className = "select"

export const Select: FC<SelectProps> = ({
  onChange,
  options,
  defaultValue,
  emptyLabel = DEFAULT_EMPTY_LABEL
}) => {

  const [ value, setValue ] = useState(defaultValue)

  const handleChange = useCallback(({ target: { value: val } }: SelectChangeEvent<string[]>) => {
    setValue(Array.isArray(val) ? val : [val])
  },  [setValue] )

  const handleClose = useCallback(() => onChange(value), [onChange, value])

  return <FormControl style={{minWidth: 200}}>
    <InputLabel id="demo-simple-select-label">{emptyLabel}</InputLabel>
    <MaterialSelect
      variant='standard'
      value={value}
      onChange={handleChange}
      multiple
      size="small"
      className={className+'__options'}
      onClose={handleClose}
    >
      {options.map(option =>  <MenuItem value={option} key={option}>{option}</MenuItem>)}
    </MaterialSelect>
  </FormControl>
}