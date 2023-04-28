import { Button, HStack, Icon, Text } from "@chakra-ui/react";
import Router from "next/router";
import { MdLogout, MdShoppingCart } from "react-icons/md";

interface Props {
  username: string;
}

export function MenuLogged({ username }: Props) {
  function Logout() {
    localStorage.removeItem("ps-current-user");
    Router.push("/auth");
  }
  return (
    <HStack
      px={4}
      py={2}
      bg={"blackAlpha.200"}
      justifyContent={"space-between"}
    >
      <Text fontSize={"sm"} as={"b"} color={"blackAlpha.700"}>
        Bem vindo {username}
      </Text>

      <HStack>
        <Button variant={"ghost"} colorScheme="blackAlpha">
          <Icon as={MdShoppingCart} color={"blackAlpha.700"} fontSize={"2xl"} />
        </Button>
        <Button variant={"ghost"} colorScheme="blackAlpha">
          <Icon
            as={MdLogout}
            color={"blackAlpha.700"}
            fontSize={"2xl"}
            onClick={Logout}
          />
        </Button>
      </HStack>
    </HStack>
  );
}
