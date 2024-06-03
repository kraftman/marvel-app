import { useEffect, useState } from "react";
import Link from "next/link";
import { getCharacters } from "./actions/characterActions";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";

const Home = async () => {
  let characters = await getCharacters();
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Marvel Characters
      </Typography>
      <List>
        {characters.map((character) => (
          <ListItem key={character.id}>
            <ListItemAvatar>
              <Avatar
                alt={character.name}
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              />
            </ListItemAvatar>
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
