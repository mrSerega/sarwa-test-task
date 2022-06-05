import { ChangeEvent, FC, useCallback } from "react";

import { TextAreaProps } from "./types";

import './TextArea.css'

const className = 'text-area'

export const TextArea: FC<TextAreaProps> = ({
  label,
  value,
  onChange
}) => {

  const handleChange = useCallback(
    (evt: ChangeEvent<HTMLTextAreaElement>) => onChange(evt.target.value),
    [onChange]
  )

  return <div className={className}>
    <div className={className + '__label'}>
      {label}
    </div>
    <textarea className={className + '__area'} value={value} onChange={handleChange}/>
  </div>
} 