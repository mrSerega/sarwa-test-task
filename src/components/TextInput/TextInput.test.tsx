import { fireEvent, render, screen } from "@testing-library/react"
import { TextInputTestId } from "./constants"
import { TEXT_INPUT_DEFAULT_PROPS } from "./fixtures"
import { TextInput } from "./TextInput"
import { TextInputProps } from "./types"

const setup = (props?: Partial<TextInputProps>) => render(<TextInput {...{...TEXT_INPUT_DEFAULT_PROPS, ...props}}/>)

describe('TextInput', () => {
  describe('when TextInput is rendered', () => {
    it('renders passed value', () => {
      setup()

      const textInput = screen.getByTestId(TextInputTestId) 
      expect(textInput).toBeInTheDocument()
      expect(textInput).toHaveAttribute('value', TEXT_INPUT_DEFAULT_PROPS.value)
    })
  })

  describe('when value is changed', () => {
    it('calls onChange', () => {
      setup()

      fireEvent.change(screen.getByTestId(TextInputTestId), { target: {value: 'new value'}})
      expect(TEXT_INPUT_DEFAULT_PROPS.onChange).toHaveBeenCalledWith('new value')
    })
  })
})