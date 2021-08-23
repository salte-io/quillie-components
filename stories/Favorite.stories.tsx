import React from 'react';

import { Favorite, FavoriteProps } from './Favorite';

export default {
  title: 'Components/Favorite',
  component: Favorite,
};

const Template = (args: FavoriteProps) => <Favorite {...args} />;

export const Simple = Template.bind({});
