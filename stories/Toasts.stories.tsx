import React from 'react';
import { Button } from './Button';

import { Toasts, ToastsProps, AddToastNotification } from './Toasts';

export default {
  title: 'Components/Toast',
  component: Toasts,
};

const Template = (args: ToastsProps) => (
  <>
    <Button
      onClick={() => {
        AddToastNotification({
          message: 'This is a test',
        });
      }}
    >
      Add Notification
    </Button>
    <Toasts {...args} />
  </>
);

export const Simple = Template.bind({});
