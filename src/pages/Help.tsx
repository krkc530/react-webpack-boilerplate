import { useNavigate } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';

export default function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('..'); // go back
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography>Help description</Typography>
      <Button onClick={handleClick}>go back</Button>
    </Box>
  );
}
