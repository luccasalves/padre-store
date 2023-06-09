import Head from "next/head";

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/layout";
import { Text, Center, Button, VStack, Icon } from "@chakra-ui/react";

import { BsCashCoin } from "react-icons/bs";
import Router from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Shop() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Layout>
          <Center height={"80vh"}>
            <VStack gap={10}>
              <Icon as={BsCashCoin} fontSize={80} />
              <Text maxW={"xl"} textAlign={"center"}>
                Aqui o cliente seria redirecionado para uma pagina de serviço de
                pagamento como por exemplo pagar.me para finalizar a compra.
              </Text>
              <Button
                onClick={() => {
                  Router.push("/store");
                }}
              >
                Voltar
              </Button>
            </VStack>
          </Center>
        </Layout>
      </main>
    </>
  );
}
