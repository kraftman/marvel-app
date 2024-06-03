import { Container, Typography, Box } from "@mui/material";
import { getCharacterById } from "../../actions/characterActions";

const CharacterDetail = async ({ params }) => {
  const { id } = params;

  const character = await getCharacterById(id);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        {character.name}
      </Typography>
      <Box
        component="img"
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        sx={{
          width: "100%",
          maxWidth: "600px",
          height: "auto",
          marginBottom: 2,
        }}
      />
      <Typography variant="body1">{character.description}</Typography>
    </Container>
  );
};

export default CharacterDetail;
