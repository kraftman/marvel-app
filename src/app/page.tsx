import { useEffect, useState } from 'react';
import { getMarvelData } from '../lib/marvel';
import Link from 'next/link';
import { Container, List, ListItem, ListItemText } from '@mui/material';

const Home = ({ characters}) => {
  

  return (
    <Container>
      <h1>Marvel Characters</h1>
      <List>
        {characters.map((character: any) => (
          <ListItem key={character.id}>
            <Link href={`/character/${character.id}`} passHref>
              <ListItemText primary={character.name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Home;