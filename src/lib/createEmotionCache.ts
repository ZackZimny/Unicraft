import createCache from '@emotion/cache';

const isBrowser = typeof document !== 'undefined';

// On the client side, create a cache once
let clientSideEmotionCache: ReturnType<typeof createCache> | undefined;

export default function createEmotionCache() {
  if (isBrowser) {
    if (!clientSideEmotionCache) {
      clientSideEmotionCache = createCache({ key: 'mui' });
    }
    return clientSideEmotionCache;
  } else {
    // On server, create a new cache for each request
    return createCache({ key: 'mui' });
  }
}