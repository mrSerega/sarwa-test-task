import { render, screen } from "@testing-library/react";

import { PROJECT_GRID_DEFAULT_PROPS } from "./fixtures";
import { ProjectGrid } from "./ProjectGrid";
import { ProjectGridProps } from "./types";

const setup = (props?: ProjectGridProps) => render(<ProjectGrid {...{...PROJECT_GRID_DEFAULT_PROPS, ...props}}/>)

describe('ProjectGrid', () => {
  describe('when ProjectGrid is rendered', () => {
    it.each(PROJECT_GRID_DEFAULT_PROPS.list)('renders all projects: %s', ({title}) => {
      setup()

      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })
})