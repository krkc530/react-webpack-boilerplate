import { useTranslation } from 'react-i18next';

import { Box, Typography } from '@mui/material';

interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography
        variant='h4'
        sx={{
          fontWeight: 'bold',
          fontSize: '1.88em',
          textAlign: 'center',
        }}
      >
        {t(`Home:${title}`)}
      </Typography>
    </Box>
  );
};

export default PageTitle;
