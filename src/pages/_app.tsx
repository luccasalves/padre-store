import { useEffect } from "react";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Header } from "@/components/header";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ delay: 200 });
  }, []);
  return (
    <ChakraProvider>
      <>
        <Header />
        <AnimatePresence mode="wait" initial={false}>
          <Box maxW={"1124"} m={"auto"}>
            <Component {...pageProps} />
          </Box>
        </AnimatePresence>
      </>
    </ChakraProvider>
  );
}
