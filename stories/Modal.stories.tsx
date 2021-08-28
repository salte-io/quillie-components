import React, { useState } from 'react';

import { TextArea } from './TextArea';
import { Input } from './Input';
import { Button } from './Button';
import { Modal, ModalProps } from './Modal';
import { noop } from './utils/noop';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
      actions: {
          argTypesRegex: '(?!^onSubmit)^on[A-Z].*',
      },
  },
};

const Template = (args: ModalProps) => {
  const [opened, setOpened] = useState<boolean>(args.opened);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open Modal</Button>
      <Modal
        {...args}
        opened={opened}
        onCancel={() => setOpened(false)}
      />
    </>
  );
};

export const Simple = Template.bind({});
Simple.args = {
  title: 'Submit feedback',
  children: (
    <>
      <div>Describe your issue or share your ideas!</div>
      <TextArea />
      <Input placeholder='Email Address (optional)' />
    </>
  ),
};

export const WithSubmit = Template.bind({});
WithSubmit.args = {
  title: 'Submit feedback',
  children: (
    <>
      <div>Describe your issue or share your ideas!</div>
      <TextArea />
      <Input placeholder='Email Address (optional)' />
    </>
  ),
  onSubmit: noop,
};
