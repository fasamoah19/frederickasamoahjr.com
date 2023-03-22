import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import theme from "@/styles/theme";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Analytics />
      </>
    </ChakraProvider>
  );
}
