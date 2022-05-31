import { FC } from "react";
import { CheckboxProps } from "./types";

export const Checkbox: FC<CheckboxProps> = ({
  value,
  label,
  onChange
}) => <div>
    <input type='checkbox' checked={value} onChange={(evt) => onChange(evt.target.checked)} />{label}
  </div>