import React from 'react';

import { Favorite, FavoriteProps } from './Favorite';

export default {
  title: 'Components/Favorite',
  component: Favorite,
};

const Template = (args: FavoriteProps) => <Favorite {...args} />;

export const Unchecked = Template.bind({});
Unchecked.args = {
  tooltip: 'This is an example',
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  tooltip: 'This is an example',
};
