import React from 'react';

import { Button, ButtonProps } from './Button';
import { Theme } from './constants';
import { Icon, IconType } from './Icon';

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

export const PrimaryAccent = Template.bind({});
PrimaryAccent.args = {
  children: 'Button',
  theme: Theme.PrimaryAccent,
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
      <Icon icon={IconType.Plus} />
      <div>Test with lots of text</div>
    </>
  ),
  theme: Theme.Primary,
};

export const Twitter = Template.bind({});
Twitter.args = {
  children: (
    <Icon icon={IconType.Twitter} />
  ),
  theme: Theme.Twitter,
};

export const Facebook = Template.bind({});
Facebook.args = {
  children: (
    <Icon icon={IconType.Facebook} />
  ),
  theme: Theme.Secondary,
};
