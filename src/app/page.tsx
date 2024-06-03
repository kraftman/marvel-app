import { useEffect, useState } from "react";
import Link from "next/link";
import { getCharacters } from "./actions/characterActions";
import { Container, List, ListItem, ListItemText } from "@mui/material";

const Home = async () => {
  let characters = await getCharacters();
  console.log("characters", characters);
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
