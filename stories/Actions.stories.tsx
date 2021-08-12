import React from 'react';
import { Button } from './Button';

import { Actions, ActionsProps } from './Actions';
import { Icon } from './Icon';

export default {
  title: 'Components/Actions',
  component: Actions,
  argTypes: {
    children: {
      table:{
        disable: true,
      },
    },
  },
};

const Template = (args: ActionsProps) => <Actions {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  primary: (
    <>
      <Button>
        <Icon icon='heart' />
      </Button>
      <Button>
        <Icon icon='delete' />
      </Button>
    </>
  ),
  secondary: (
    <Button>
      <Icon icon='share' />
    </Button>
  ),
};

export const PrimaryOnly = Template.bind({});
PrimaryOnly.args = {
  primary: (
    <>
      <Button>
        <Icon icon='heart' />
      </Button>
      <Button>
        <Icon icon='delete' />
      </Button>
    </>
  ),
};

export const SecondaryOnly = Template.bind({});
SecondaryOnly.args = {
  secondary: (
    <Button>
      <Icon icon='share' />
    </Button>
  ),
};
