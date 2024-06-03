import { Typography, Box } from '@mui/material';
export const CharacterDetail = async ({ character }) => {
  return (
    <>
      <Typography variant="h3" gutterBottom>
        {character.name}
      </Typography>
      <Box
        component="img"
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        sx={{
          width: '100%',
          maxWidth: '600px',
          height: 'auto',
          marginBottom: 2,
        }}
      />
      <Typography variant="body1">{character.description}</Typography>
    </>
  );
};
