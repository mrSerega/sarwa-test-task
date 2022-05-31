import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Select } from './Select';

export default {
  title: 'Select',
  component: Select,
} as ComponentMeta<typeof Select>;

export const Primary: ComponentStory<typeof Select> = () => <Select
  initialValue={["value"]}
  options={['value', 'value1', 'value2']}
  onChange={action('select-change')}
/>