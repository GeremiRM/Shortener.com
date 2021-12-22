import Head from "next/head";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";

import theme from "../theme";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Shorten your links! | Shortener.com</title>
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
