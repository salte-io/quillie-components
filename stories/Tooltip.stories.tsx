import React from 'react';
import { Button } from './Button';
import { Icon } from './Icon';

import { Tooltip, TooltipProps } from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
};

const Template = (args: TooltipProps) => (
  <>
    <Button data-tooltip='add'>
      <Icon icon='plus' />
      <Tooltip id='add' {...args}>
        Create a List
      </Tooltip>
    </Button>
  </>
);

export const Simple = Template.bind({});
