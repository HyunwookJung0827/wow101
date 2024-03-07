import "@/styles/globals.css";
// pages/_app.tsx

import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import TagManager from 'react-gtm-module';
import { gtmConfig } from '../utils/gtm';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    TagManager.initialize(gtmConfig);
    const handleRouteChange = (url: string) => {
      TagManager.dataLayer({
        dataLayer: {
          page: url,
        },
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
