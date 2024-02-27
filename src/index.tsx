import * as React from 'react';
import { createRoot } from 'react-dom/client';

/* load default fonts */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

/* load i18next */
import './locales';

import App from '@/App';

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
