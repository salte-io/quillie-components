import React from 'react';

import { Icon, IconProps, IconType } from './Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    icon: {
      options: Object.values(IconType),
      control: { type: 'select' },
    },
  },
};

const Template = (args: IconProps) => <Icon {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  icon: 'plus',
};
