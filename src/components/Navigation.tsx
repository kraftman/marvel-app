import Link from 'next/link';
import { AppBar, Toolbar, Button } from '@mui/material';

export const Navigation = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Button color="inherit" component={Link} href="/">
          Home
        </Button>
        <Button color="inherit" component={Link} href="/characters">
          Characters
        </Button>
      </Toolbar>
    </AppBar>
  );
};
