import React from 'react';
import { Meta } from '@storybook/react';
import { CharacterDetail } from './CharacterDetail';

const mockData = [
  {
    id: 1,
    name: 'Spiderman',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec',
      extension: 'jpg',
    },
    description: 'text about spiderman',
  },
];

export default {
  title: 'Components/CharacterDetail',
  component: CharacterDetail,
};

export const CharacterDetailStories = {
  render: () => {
    return <CharacterDetail character={mockData[0]} />;
  },
  parameters: {},
  loaders: [],
};
