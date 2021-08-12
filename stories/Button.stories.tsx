import React from 'react';

import { Button, ButtonProps } from './Button';
import { Theme } from './constants';
import { Icon } from './Icon';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    theme: {
      options: Object.values(Theme),
      control: { type: 'select' },
    },
  },
};

const Template = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  theme: Theme.Primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  theme: Theme.Secondary,
};

export const Accent = Template.bind({});
Accent.args = {
  children: 'Button',
  theme: Theme.Accent,
};

export const Inverse = Template.bind({});
Inverse.args = {
  children: 'Button',
  theme: Theme.Primary,
  inverse: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: (
    <>
      <Icon icon='plus'/>
      <div>Test</div>
    </>
  ),
  theme: Theme.Primary,
};
