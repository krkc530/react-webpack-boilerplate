import { useMemo, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from '@mui/material';

import Help from '@/pages/Help';
import Home from '@/pages/Home';
import Layout from '@/pages/layouts/Layout';
import { getGlobalTheme } from '@/styles/globalStyles';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/help',
        element: <Help />,
      },
    ],
  },
]);

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');

  const theme = useMemo(
    () =>
      createTheme({
        ...getGlobalTheme(mode),
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
