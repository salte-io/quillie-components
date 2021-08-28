import React from 'react';
import { Button } from './Button';

import { Actions, ActionsProps } from './Actions';
import { Icon, IconType } from './Icon';

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
        <Icon icon={IconType.Heart} />
      </Button>
      <Button>
        <Icon icon={IconType.Delete} />
      </Button>
    </>
  ),
  secondary: (
    <Button>
      <Icon icon={IconType.Share} />
    </Button>
  ),
};

export const PrimaryOnly = Template.bind({});
PrimaryOnly.args = {
  primary: (
    <>
      <Button>
        <Icon icon={IconType.Heart} />
      </Button>
      <Button>
        <Icon icon={IconType.Delete} />
      </Button>
    </>
  ),
};

export const SecondaryOnly = Template.bind({});
SecondaryOnly.args = {
  secondary: (
    <Button>
      <Icon icon={IconType.Share} />
    </Button>
  ),
};
