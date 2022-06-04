import { fireEvent, render, screen } from "@testing-library/react"

import { Button } from "./Button"
import { ButtonProps } from "./types"
import { BUTTON_DEFAULT_PROPS } from "./fixtures"

const setup = (props?: Partial<ButtonProps>) => render(<Button {...{...BUTTON_DEFAULT_PROPS, ...props}} />)

describe('Button', () => {
  describe('when button is rendered', () => {
    it('renders label', () => {
      setup()

      expect(screen.getByText(BUTTON_DEFAULT_PROPS.label)).toBeInTheDocument()
    })
  })

  describe('when button is clicked', () => {
    it('calls onClick', () => {
      setup()

      fireEvent.click(screen.getByText(BUTTON_DEFAULT_PROPS.label))
      expect(BUTTON_DEFAULT_PROPS.onClick).toHaveBeenCalled()
    })
  })
})