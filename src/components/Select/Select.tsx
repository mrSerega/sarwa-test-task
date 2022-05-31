import { ChangeEvent, FC, useCallback, useState } from 'react'
import { xor } from 'lodash' 

import { SelectProps } from "./types";
import { getLabel } from './utils';

export const Select: FC<SelectProps> = ({
  onChange,
  options,
  initialValue
}) => {

  const [value, setValue] = useState(initialValue)

  const handleChange = useCallback((evt: ChangeEvent<HTMLSelectElement>) => {
    const newValue = xor(value, [evt.target.value])

    setValue(newValue)
    onChange(newValue)}, [value, onChange])

  return <select onChange={handleChange} value="all">
    <option value="all" disabled>
      {getLabel(value, options)}
    </option>
    {options.map(option => <option value={option} key={option}>
      {value.includes(option) ? `- ${option}` : `+ ${option}`}
    </option>)}
  </select>
}