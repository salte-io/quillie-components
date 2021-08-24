import React from 'react';
import { Button } from './Button';

import { Toasts } from './Toasts';

export default {
  title: 'Components/Toast',
  component: Toasts,
};

const Template = (args: Toasts.Props) => (
  <>
    <Button
      onClick={() => {
        Toasts.AddNotification({
          message: 'This is a test',
        })
      }}
    >
      Add Notification
    </Button>
    <Toasts {...args} />
  </>
);

export const Simple = Template.bind({});
