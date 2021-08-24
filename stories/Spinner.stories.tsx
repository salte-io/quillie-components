import React from 'react';

import { Spinner, SpinnerProps } from './Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
};

const Template = (args: SpinnerProps) => (
  <Spinner {...args}/>
);

export const Simple = Template.bind({});
Simple.args = {
  loading: true,
};
