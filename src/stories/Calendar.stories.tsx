import React from 'react';
import { Story, Meta } from '@storybook/react';
import Calendar from '../components/Calendar/index';

export default {
  title: 'Components/Calendar',
  component: Calendar,
} as Meta;

const Template = (args) => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: '20px',
    contributionColor: '#04AA6D',
    nonContributionColor: '#999999', 
};  