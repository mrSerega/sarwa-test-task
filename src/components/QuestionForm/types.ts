export type QuestionFormMessage = {
  name: string,
  email: string,
  message: string
}

export type QuestionFormViewProps = {
  onSend: (message: QuestionFormMessage) => void;
}