import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Header } from "@/components/header";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <>
        <Header />
        <AnimatePresence mode="wait" initial={false}>
          <Box p={4} maxW={"1024"} m={"auto"}>
            <Component {...pageProps} />
          </Box>
        </AnimatePresence>
      </>
    </ChakraProvider>
  );
}
