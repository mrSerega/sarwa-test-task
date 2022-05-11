import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { TextInput } from './TextInput';

export default {
  title: 'TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

export const Primary: ComponentStory<typeof TextInput> = () => <TextInput value="value" onChange={action('input-change')}/>