import { Box, Button, Text } from "@chakra-ui/react";
import Router from "next/router";

interface Props {
  label: string;
  content: string;
  url: string;
}

export function ButtonLink({ content, label, url }: Props) {
  function handleClick() {
    Router.push(url);
  }

  return (
    <Box onClick={handleClick}>
      <Button w={100} fontSize={"2xl"}>
        {content}
      </Button>
      <Text textAlign={"center"}>{label}</Text>
    </Box>
  );
}
