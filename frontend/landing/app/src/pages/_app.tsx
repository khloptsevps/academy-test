import React from 'react';
import type { AppProps } from 'next/app';

import { ThemeProvider } from '@ui/theme';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
