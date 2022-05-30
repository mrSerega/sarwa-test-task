import { render, screen } from "@testing-library/react";

import { PROJECT_ITEM_DEFAULT_PROPS } from "./fixtures";
import { ProjectItem } from "./ProjectItem";
import { ProjectItemProps } from "./types";

const setup = (props?: Partial<ProjectItemProps>) => 
  render(<ProjectItem {...{...PROJECT_ITEM_DEFAULT_PROPS, ...props}}/>)

describe('ProjectItem', () => {
  describe('when ProjectItem is rendered', ()=> {
    it('renders passed props', () => {
      setup()

      expect(screen.getByText(PROJECT_ITEM_DEFAULT_PROPS.clientName)).toBeInTheDocument()
      expect(screen.getByText(PROJECT_ITEM_DEFAULT_PROPS.title)).toBeInTheDocument()
      
      expect(screen.getByText('VIEW CASE')).toHaveAttribute('href', PROJECT_ITEM_DEFAULT_PROPS.projectUrl)

      expect(screen.getByLabelText('project cover')).toHaveStyle(`background-image: url(${PROJECT_ITEM_DEFAULT_PROPS.coverImage})`)
    })
  })
})