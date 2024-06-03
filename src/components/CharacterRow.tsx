import Link from 'next/link';
import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';

export const CharacterRow = ({ character }) => {
  return (
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
  );
};
