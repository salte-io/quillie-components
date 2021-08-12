import React from 'react';

import { Checkbox, CheckboxProps } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    children: {
      table:{
        disable: true,
      },
    },
  },
};

const Template = (args: CheckboxProps) => <Checkbox {...args} />;

export const Simple = Template.bind({});
