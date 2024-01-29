import React from 'react';
import { Story, Meta } from '@storybook/react';
import {Testing} from '../components/Testing/Testing';

export default {
  title: 'Components/Testing',
  component: Testing,
} as Meta;

const Template: Story = (args) => <Testing {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add any default props you want to showcase
};