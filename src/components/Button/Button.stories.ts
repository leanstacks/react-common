import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import { ButtonVariant } from './Button.types';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { description: 'The content within the button.' },
    className: { description: 'Additional CSS classes.' },
    disabled: { description: 'Disabled state.' },
    testId: { description: 'Unit test identifier.' },
    variant: {
      control: 'select',
      options: [ButtonVariant.Primary, ButtonVariant.Secondary, ButtonVariant.Text],
      description: 'The variant style.',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary button',
    variant: ButtonVariant.Primary,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary button',
    variant: ButtonVariant.Secondary,
  },
};

export const Text: Story = {
  args: {
    children: 'Text button',
    variant: ButtonVariant.Text,
  },
};
