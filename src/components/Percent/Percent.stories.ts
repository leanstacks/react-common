import type { Meta, StoryObj } from '@storybook/react';

import Percent from './Percent';

const meta = {
  title: 'Components/Percent',
  component: Percent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: { description: 'Additional CSS classes.' },
    testId: { description: 'Unit test identifier.' },
    value: { description: 'The value to be formatted and displayed.' },
  },
} satisfies Meta<typeof Percent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 0.99,
  },
};
