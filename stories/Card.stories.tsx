import React from 'react';
import { Actions } from './Actions';
import { Button } from './Button';

import { Card, CardProps } from './Card';
import { Checkbox } from './Checkbox';
import { Layout } from './constants';
import { Icon } from './Icon';
import { Input } from './Input';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    children: {
      table:{
        disable: true,
      },
    },
  },
};

const Template = (args: CardProps) => <Card {...args} />;

export const Vertical = Template.bind({});
Vertical.args = {
  children: (
    <>
      <Actions
        secondary={(
          <>
            <Checkbox />
            <Input placeholder='Unnamed List'/>
          </>
        )}
      />
      This is an example card with Actions
      <Actions
        primary={(
          <>
            <Button inverse>
              <Icon icon='delete' />
            </Button>
          </>
        )}
        secondary={(
          <Button inverse>
            <Icon icon='share' />
          </Button>
        )}
      />
    </>
  ),
  layout: Layout.Vertical,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  children: (
    <>
      <Button inverse>
        <Icon icon='share'/>
      </Button>
      <Button inverse>
        <Icon icon='delete'/>
      </Button>
    </>
  ),
  layout: Layout.Horizontal,
};

export const Clickable = Template.bind({});
Clickable.args = {
  children: (
    <div>Some Content</div>
  ),
  layout: Layout.Vertical,
  onClick: () => ({}),
};

export const LinkClickable = Template.bind({});
LinkClickable.args = {
  children: (
    <div>Some Content</div>
  ),
  layout: Layout.Vertical,
  type: 'a',
  href: 'https://google.com',
};
