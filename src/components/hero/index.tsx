import { Box, Stack, Text, Button, Hide, Image } from "@chakra-ui/react";
import Router from "next/router";

export function Hero() {
  function openStore() {
    Router.push("/store");
  }

  return (
    <Stack
      height={500}
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
          src="/images/cruz.png"
          alt="cruz"
          objectFit="cover"
          w={"300px"}
        />
      </Hide>
    </Stack>
  );
}
