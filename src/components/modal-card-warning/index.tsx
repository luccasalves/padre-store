import {
  Button,
  Center,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import Router from "next/router";
import { MdShoppingCart } from "react-icons/md";

interface Props {
  isOpen: boolean;
  onClose(): void;
  msg: string;
  color: "yellow.200" | "blue.400";
}

export function ModalWarning({ isOpen, onClose, msg, color }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Ação necessária !</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Center bg={color} p={4}>
            <Icon as={MdShoppingCart} fontSize={"80"} margin={"auto"} />
          </Center>
          <p>Para {msg} é necessário possuir uma conta para poder prosseguir</p>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={() => {
              Router.push("/auth");
            }}
            colorScheme="blackAlpha"
            bg={"black"}
            mr={3}
          >
            Criar conta
          </Button>
          <Button onClick={onClose} variant="ghost">
            fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
