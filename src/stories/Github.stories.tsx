import React from 'react';
import { Story, Meta } from '@storybook/react';
import Github from '../components/Github/index';

export default {
  title: 'Components/Github',
  component: Github,
} as Meta;

const Template = (args) => <Github {...args} />;

export const Default = Template.bind({});
Default.args = {
    token: "TOK",
    userName: "iampratik32",
    onError: (errorMessage) => {
        console.log(`Error is -> ${errorMessage}`)
    }
  // Add any default props you want to showcase
};  