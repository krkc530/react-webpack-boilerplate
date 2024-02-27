import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  function handleClick() {
    navigate('/help');
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
      <Typography>{t(`Home:description`)}</Typography>
      <Button onClick={handleClick}>go help</Button>
    </Box>
  );
}
