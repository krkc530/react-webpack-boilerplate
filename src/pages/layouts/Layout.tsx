import { Outlet } from 'react-router-dom';

import { Box, Divider } from '@mui/material';

import PageTitle from './PageTitle';

export default function Layout() {
  return (
    <>
      <PageTitle title={'title'} />
      <Divider />
      <Box
        sx={{
          px: 10,
          mt: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* for nested routes */}
        <Outlet />
      </Box>
    </>
  );
}
