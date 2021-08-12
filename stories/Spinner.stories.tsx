import React from 'react';
import { Button } from './Button';

import { Spinner, SpinnerProps } from './Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
};

const Template = (args: SpinnerProps) => (
  <Button disabled>
    Hello World
    <Spinner {...args}/>
  </Button>
);

export const Simple = Template.bind({});
