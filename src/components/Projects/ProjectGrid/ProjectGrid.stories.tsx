import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PROJECT_GRID_DEFAULT_PROPS } from './fixtures';

import { ProjectGrid } from './ProjectGrid';

export default {
  title: 'ProjectGrid',
  component: ProjectGrid,
} as ComponentMeta<typeof ProjectGrid>;

export const Primary: ComponentStory<typeof ProjectGrid> = () => <ProjectGrid {...PROJECT_GRID_DEFAULT_PROPS}/>