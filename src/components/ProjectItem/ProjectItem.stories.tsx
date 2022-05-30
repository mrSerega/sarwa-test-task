import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PROJECT_ITEM_DEFAULT_PROPS } from './fixtures';
import { ProjectItem } from './ProjectItem';

export default {
  title: 'ProjectItem',
  component: ProjectItem,
} as ComponentMeta<typeof ProjectItem>;

export const Primary: ComponentStory<typeof ProjectItem> = () => <ProjectItem {...PROJECT_ITEM_DEFAULT_PROPS}/>