import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Checkbox } from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Primary: ComponentStory<typeof Checkbox> = () => <Checkbox value onChange={action('chekbox-change')} label="Checkbox"/>