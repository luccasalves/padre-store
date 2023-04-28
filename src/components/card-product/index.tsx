import { Product } from "@/models/Product";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Center,
  Divider,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  transform,
  useDisclosure,
} from "@chakra-ui/react";
import Router from "next/router";
import { MdShoppingCart } from "react-icons/md";

interface Props {
  data: Product;
}

export function CardProduct({ data }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let BRL_FORMAT = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function handleAddCart() {
    let user = localStorage.getItem("ps-current-user");

    if (user) {
      user = JSON.parse(user);

      return;
    }

    onOpen();
  }
  return (
    <Card
      bg={"white"}
      p={4}
      maxW="2xs"
      transition={"0.2s"}
      _hover={{ boxShadow: "2xl", translate: "-10px -10px" }}
      cursor={"pointer"}
    >
      <Image
        src={data.url}
        objectFit={"cover"}
        alt="foto do produto"
        mb={4}
        height={"2xs"}
        borderRadius="lg"
      />

      <Text as={"b"} textTransform={"capitalize"}>
        {data.category}
      </Text>
      <Text>{data.description}</Text>
      <Text fontSize={"2xl"} textTransform={"capitalize"}>
        {data.name}
      </Text>
      <Text fontSize={"4xl"} as={"b"} textTransform={"capitalize"}>
        {BRL_FORMAT.format(Number(data.amount))}
      </Text>
      <Text as={"i"}>
        em ate x{data.installments} de
        {BRL_FORMAT.format(
          Number((data.amount / data.installments).toFixed(2))
        )}
      </Text>
      <Divider my={4} />
      <ButtonGroup spacing="2">
        <Button
          onClick={() => {
            Router.push("/shop");
          }}
          variant="solid"
          colorScheme="blackAlpha"
          bg={"black"}
        >
          Comprar
        </Button>
        <Button variant="outline" colorScheme="blue" onClick={handleAddCart}>
          + add carrinho
        </Button>
      </ButtonGroup>

      <Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ação necessária !</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center bg={"yellow.200"} p={4}>
              <Icon as={MdShoppingCart} fontSize={"80"} margin={"auto"} />
            </Center>
            <p>
              Para adicionar o item ao carrinho é necessário possuir uma conta
              para poder salvar
            </p>
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
    </Card>
  );
}
