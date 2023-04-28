import Head from "next/head";

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/layout";
import { Box, Text, HStack, Stack } from "@chakra-ui/react";
import { Hero } from "@/components/hero";
import { ButtonLink } from "@/components/button-link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
          <Hero />
          <Stack
            direction={{ base: "column", md: "row" }}
            px={8}
            py={12}
            mt={12}
            justifyContent={{ base: "center"import Head from "next/head";
            import Image from "next/image";
            import { Inter } from "next/font/google";
            import styles from "@/styles/Home.module.css";
            import Layout from "@/layout";
            import {
              Box,
              Button,
              HStack,
              Icon,
              Stack,
              Text,
              VStack,
            } from "@chakra-ui/react";
            import { useEffect, useState } from "react";
            import { User } from "@/models/User";
            import { MdShoppingCart, MdLogout } from "react-icons/md";
            import { MenuLogged } from "@/components/menu-logged";
            import { ProductList } from "@/data/products";
            import { CardProduct } from "@/components/card-product";
            import { ButtonLink } from "@/components/button-link";
            
            const inter = Inter({ subsets: ["latin"] });
            
            export default function Home() {
              const [user, setUser] = useState<User>({
                id: "",
                password: "",
                username: "",
              });
            
              useEffect(() => {
                const userLogged = localStorage.getItem("ps-current-user");
            
                console.log(userLogged);
            
                if (userLogged) {
                  const userDb = JSON.parse(userLogged) as User;
            
                  setUser(userDb);
                }
              }, []);
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
                      {user.username.length > 0 ? (
                        <MenuLogged username={user.username} />
                      ) : null}
                      <HStack alignItems={"flex-start"} p={4} position={"relative"}>
                        <VStack>
                          <Text>Filtrar </Text>
                          <ButtonLink content="✡️" url="/store" />
                          <ButtonLink content="✝️" url="/store" />
                          <ButtonLink content="☯️" url="/store" />
                        </VStack>
                        <Stack
                          direction={"row"}
                          flexWrap={"wrap"}
                          gap={4}
                          p={4}
                          justifyContent={"center"}
                        >
                          {ProductList.map((item, index) => (
                            <CardProduct key={index + item.name} data={item} />
                          ))}
                        </Stack>
                      </HStack>
                    </Layout>
                  </main>
                </>
              );
            }
            , md: "space-between" }}
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="400"
          >
            <Box mb={8}>
              <Text fontSize={"4xl"} as="b" lineHeight={10} textAlign={"start"}>
                Artigos sobre
              </Text>

              <HStack gap={6} mt={"4"}>
                <ButtonLink content="✡️" label="Judaísmo" url="/store" />
                <ButtonLink content="✝️" label="Cristianismo" url="/store" />
                <ButtonLink content="☯️" label="Budismo" url="/store" />
              </HStack>
            </Box>

            <Text fontSize={"4xl"} as="b" lineHeight={10}>
              +300k produtos
            </Text>
          </Stack>
        </Layout>
      </main>
    </>
  );
}
