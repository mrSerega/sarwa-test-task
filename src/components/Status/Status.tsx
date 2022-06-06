import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { FC, useCallback } from "react";
import { AccountStatus } from "../../types";
import { StatusProps } from "./type";
import { getAvailableStatuses } from './utils'

export const Status: FC<StatusProps> = ({
  status,
  balance,
  onChange
}) => {
  const availableStatuses = getAvailableStatuses(status, balance)

  const handleChange = useCallback(
    (evt: SelectChangeEvent<AccountStatus>) => 
      onChange(evt.target.value as AccountStatus),
      [onChange]
    )

  return <Select
      variant='standard'
      value={status}
      onChange={handleChange}
      size="small"
      disabled={availableStatuses.length === 0}
    >
      <MenuItem value={status} disabled>{status}</MenuItem>)
      {availableStatuses.map(option =>  <MenuItem value={option} key={option}>{option}</MenuItem>)}
    </Select>
}