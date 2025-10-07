'use client';

import { ReactNode } from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { EmotionCache } from '@emotion/cache';
import createEmotionCache from '../lib/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

const theme = createTheme({
  typography: {
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
});

export default function Providers({ children, emotionCache = clientSideEmotionCache }: { children: ReactNode; emotionCache?: EmotionCache }) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}