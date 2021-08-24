import React from 'react';

import { Typography } from './Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
};

const Template = (args: Typography.Props) => (
  <Typography {...args}>
    Example
  </Typography>
);

export const Simple = Template.bind({});

export const Anchor = Template.bind({});
Anchor.args = {
  href: 'https://google.com',
  target: '_blank',
  type: 'a',
}
