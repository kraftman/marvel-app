import { Container } from '@mui/material';
import { getCharacterById } from '../../actions/characterActions';
import { CharacterDetail } from '../../../components/CharacterDetail';

const Page = async ({ params }) => {
  const { id } = params;

  const character = await getCharacterById(id);

  return (
    <Container>
      <CharacterDetail character={character} />
    </Container>
  );
};

export default Page;
