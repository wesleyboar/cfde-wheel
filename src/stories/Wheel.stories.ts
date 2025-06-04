import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { fn } from 'storybook/test';

import CFDEWheel from '..';

const meta = {
  title: 'Example/CFDEWheel',
  component: CFDEWheel,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
} satisfies Meta<typeof CFDEWheel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Wheel: Story = {};

