import React from 'react';

import { Typography, TypographyProps } from './Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
};

const Template = (args: TypographyProps) => (
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
