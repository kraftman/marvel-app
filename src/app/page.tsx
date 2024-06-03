// pages/index.js

import { Typography, Link, Container } from '@mui/material';

export default function WelcomePage() {
  return (
    <div>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to the Marvel App!
      </Typography>
      <Typography variant="h6">
        Navigate to <Link href="/characters">characters</Link> to see a full list of Marvel
        characters.
      </Typography>
    </div>
  );
}
