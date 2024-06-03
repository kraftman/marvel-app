import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from '@mui/material';
import { CharacterRow } from '../components/CharacterRow';
import { getCharacters } from './actions/characterActions';

const Home = async () => {
  let characters = await getCharacters();
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Marvel Characters
      </Typography>
      <List>
        {characters.map((character) => (
          <CharacterRow key={character.id} character={character} />
        ))}
      </List>
    </Container>
  );
};

export default Home;
