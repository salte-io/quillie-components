import React from 'react';
import { Button } from './Button';

import { Grid, GridProps } from './Grid';
import { Layout } from './constants';
import { Icon } from './Icon';

export default {
  title: 'Components/Grid',
  component: Grid,
  argTypes: {
    children: {
      table:{
        disable: true,
      },
    },
  },
};

const Template = (args: GridProps) => <Grid {...args} />;

export const Vertical = Template.bind({});
Vertical.args = {
  children: (
    <>
      <Button>
        <Icon icon='delete' />
      </Button>
      <Button>
        <Icon icon='share' />
      </Button>
    </>
  ),
  layout: Layout.Vertical,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  children: (
    <>
      <Button>
        <Icon icon='share'/>
      </Button>
      <Button>
        <Icon icon='delete'/>
      </Button>
    </>
  ),
  layout: Layout.Horizontal,
};