import { FC, useCallback } from "react"
import { QuestionFormView } from "./QuestionFormView"
import { QuestionFormMessage } from "./types"

export const QuestionFormWrapper: FC = () => {

  const handleSend = useCallback((message: QuestionFormMessage) => alert(message), [])

  return <QuestionFormView onSend={handleSend}/>
}