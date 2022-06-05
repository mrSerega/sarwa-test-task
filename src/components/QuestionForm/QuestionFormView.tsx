import { FC, useCallback, useMemo, useState } from "react";

import { Button, TextArea, TextInput } from "../controls";
import { validateEmail } from './utils'

import './QuestionForm.css'
import { QuestionFormViewProps } from "./types";

const className = 'question-form'

export const QuestionFormView: FC<QuestionFormViewProps> = ({
  onSend
}) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSend = useCallback(() => onSend({
    name,
    email,
    message
  }), [onSend, name, email, message])

  const emailError = useMemo(() => validateEmail(email), [email])

  return <div className={className}>
    <div className={className + '__left'}>
      QUESTION?
      WE ARE HERE
      TO HELP!
    </div>
    <div className={className + '__right'}>
      <div className={className + '__contacts'} >
        <div className={className + '__name'}>
          <TextInput 
            label='NAME'
            value={name} 
            onChange={setName}
          />
        </div>
        <div className={className + '__email'}>
          <TextInput
            label="EMAIL"
            value={email}
            onChange={setEmail}
            warning={emailError}
          />
        </div>
      </div>
      <div className={className + '__text-area'}>
        <TextArea
          label="MESSAGE"
          value={message}
          onChange={setMessage}/>
      </div>
      <div className={className + '__button'}>
      <Button
          onClick={handleSend}
          label="SEND"
          size="large"
          disabled={Boolean(emailError)}
        />
      </div>
    </div>
  </div>
} 