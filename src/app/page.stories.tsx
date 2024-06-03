import React from 'react';
import { Meta } from '@storybook/react';
import Home from './page';

export default {
  title: 'Pages/HomePage',
  component: Home,
};

export const HomePage = {
  render: () => {
    return <Home />;
  },
  parameters: {},
  loaders: [],
};
