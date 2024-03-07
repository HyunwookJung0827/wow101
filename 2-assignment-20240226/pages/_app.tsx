import { AppProps } from "next/app";
import { useEffect } from "react";
import TagManager, { TagManagerArgs } from "react-gtm-module";
import { gtmConfig } from "../utils/gtm";

function MyApp({ Component, pageProps }: AppProps) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";

  const tagManagerArgs: TagManagerArgs = {
    gtmId,
  };
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
