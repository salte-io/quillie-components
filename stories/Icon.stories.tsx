import React from 'react';

import { Icon, IconProps, ICON_MAP } from './Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    icon: {
      options: Object.keys(ICON_MAP),
      control: { type: 'select' },
    },
  },
};

const Template = (args: IconProps) => <Icon {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  icon: 'plus',
};
