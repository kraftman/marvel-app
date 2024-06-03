import React from 'react';
import { Meta } from '@storybook/react';
import { CharacterRow } from './CharacterRow';

const mockData = [
  {
    id: 1,
    name: 'Spiderman',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec',
      extension: 'jpg',
    },
    details: 'text about spiderman',
  },
];

export default {
  title: 'Components/CharacterRow',
  component: CharacterRow,
};

export const CharacterRowStories = {
  render: () => {
    return <CharacterRow character={mockData[0]} />;
  },
  parameters: {},
  loaders: [],
};
