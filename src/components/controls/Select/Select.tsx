import { FC, useCallback, useState } from 'react'

import { MenuItem, Select as MaterialSelect, SelectChangeEvent } from '@mui/material';

import { SelectProps } from "./types";
import { DEFAULT_EMPTY_LABEL } from './consts';

import "./Select.css"

const className = "select"

export const Select: FC<SelectProps> = ({
  onChange,
  options,
  defaultValue,
  label,
  emptyLabel = DEFAULT_EMPTY_LABEL
}) => {

  const [ value, setValue ] = useState(defaultValue)

  const handleChange = useCallback(({ target: { value: val } }: SelectChangeEvent<string[]>) => {
    setValue(Array.isArray(val) ? val : [val])
  },  [setValue] )

  const handleClose = useCallback(() => onChange(value), [onChange, value])

  const renderValue = useCallback((val: string[]) => {
    if (val.length === 0 || val.length === options.length) {
      return emptyLabel
    }
    if (val.length === 1) {
      return val
    }
    return `${val.length} items`
  }, [emptyLabel, options])

  return <div className={className}>
    <div className={className+'__label'}>
      {label}
    </div>
    <MaterialSelect
      variant="standard"
      value={value}
      label="In"
      onChange={handleChange}
      multiple
      size="small"
      className={className+'__options'}
      onClose={handleClose}
      displayEmpty
      renderValue={renderValue}
    >
      {options.map(option =>  <MenuItem value={option} key={option}>{option}</MenuItem>)}
    </MaterialSelect>
  </div>
}