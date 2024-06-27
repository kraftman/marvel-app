import React from 'react';
import { Meta } from '@storybook/react';
import { CharacterDetail } from './CharacterDetail';
import { userEvent, within, expect, waitFor } from '@storybook/test';

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

export const CharacterDetailStoriesTest = {
  render: () => {
    return <CharacterDetail character={mockData[0]} />;
  },
  parameters: {},
  loaders: [],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // check for an image the name, and a description:
    // const image = canvas.getByAltText('Spiderman');
    // expect(image).toBeVisible();
    const title = canvas.getByText('Spiderman');
    expect(title).toHaveTextContent('Spiderman');
  },
};
