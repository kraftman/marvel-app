import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container, List, Typography } from '@mui/material';
import { CharacterRow } from '../../components/CharacterRow';
import { getCharacters } from '../actions/characterActions';
import { Pagination } from '../../components/Pagination';

const Home = async ({ searchParams }) => {
  const charsPerPage = 20;
  const currentPage = Number(searchParams?.page) || 1;

  const offset = (currentPage - 1) * charsPerPage;
  const response = await getCharacters(offset, charsPerPage);
  const characters = response.data.results;
  const totalCharacters = response.data.total;
  const numPages = Math.ceil(totalCharacters / charsPerPage);

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
      <Pagination numPages={numPages} currentPage={currentPage} />
    </Container>
  );
};

export default Home;
