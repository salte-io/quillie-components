import React from 'react';

import { Separator, SeparatorProps } from './Separator';

export default {
  title: 'Components/Separator',
  component: Separator,
};

const Template = (args: SeparatorProps) => <Separator {...args} />;

export const Simple = Template.bind({});
