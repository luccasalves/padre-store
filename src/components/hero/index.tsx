import { Box, Stack, Text, Button, Hide, Image } from "@chakra-ui/react";
import Router from "next/router";
import { CardProduct } from "../card-product";
import { relative } from "path";

export function Hero() {
  const product1 = {
    id: 8,
    name: "Terço",
    description: "Terço vermelho",
    category: "cristianismo",
    amount: 6.9,
    installments: 1,
    url: "https://images.pexels.com/photos/4202956/pexels-photo-4202956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };
  function openStore() {
    Router.push("/store");
  }

  return (
    <Stack
      height={400}
      direction="row"
      justifyContent={"space-evenly"}
      alignItems={"center"}
      bgGradient="linear(to-r, blackAlpha.50, gray.100,blackAlpha.50)"
      position={"relative"}
      zIndex={10}
    >
      <Box
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-anchor-placement="top-bottom"
        p={8}
        backdropBlur="8px"
        maxW={600}
        flexWrap={"wrap"}
      >
        <Text fontSize={"4xl"} as="b" lineHeight={10}>
          Encontre os seus artigos religiosos aqui
        </Text>
        <Text fontSize={"xl"} mt={"4"}>
          Na padre store você encontra o artigo que deseja
        </Text>

        <Button
          onClick={openStore}
          bg={"blackAlpha.900"}
          colorScheme="blackAlpha"
          color={"white"}
          w={"xs"}
          mt={"4"}
        >
          Ver Loja
        </Button>
      </Box>
      <Hide below="md">
        <Image
          src={
            "https://images.pexels.com/photos/4202956/pexels-photo-4202956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="cruz"
          objectFit="cover"
          boxSize={"xs"}
          borderRadius={"md"}
          position={"relative"}
          right={"-130px"}
          bottom={"-20"}
          boxShadow={"2xl"}
          transition={"0.2s"}
          cursor={"pointer"}
          _hover={{ translate: "-50px -10px" }}
        />
        <Image
          src={
            "https://images.pexels.com/photos/4040841/pexels-photo-4040841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="cruz"
          objectFit="cover"
          boxSize={"xs"}
          borderRadius={"md"}
          position={"relative"}
          right={"40px"}
          rotate="0.2"
          transition={"0.2s"}
          cursor={"pointer"}
          _hover={{ translate: "-50px -10px" }}
        />
      </Hide>
    </Stack>
  );
}
