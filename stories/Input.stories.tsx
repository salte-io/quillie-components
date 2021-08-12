import React from 'react';

import { Input, InputProps } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
};

const Template = (args: InputProps) => <Input {...args} />;

export const Simple = Template.bind({});
