import React from 'react';

import { Dropdown, DropdownItem, DropdownProps } from './Dropdown';
import { Button } from './Button';
import { Alignment } from './constants';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

const Template = (args: DropdownProps) => <Dropdown {...args} />;
export const Simple = Template.bind({});
Simple.args = {
  align: Alignment.Left,
  children: (
    <>
      <DropdownItem
        href='https://google.com'
        type='a'
      >
        One
      </DropdownItem>
      <DropdownItem
        href='https://google.com'
        type='a'
      >
        Two
      </DropdownItem>
      <DropdownItem>
        Three
      </DropdownItem>
    </>
  ),
  button: <Button>Click meee!</Button>,
};
