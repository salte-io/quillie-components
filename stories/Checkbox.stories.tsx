import React from 'react';

import { Checkbox, CheckboxProps } from './Checkbox';
import { Checked } from './constants';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    children: {
      table:{
        disable: true,
      },
    },
    checked: {
      options: Object.values(Checked),
      control: { type: 'select' },
    },
  },
};

const Template = (args: CheckboxProps) => <Checkbox {...args} />;

export const Simple = Template.bind({});
