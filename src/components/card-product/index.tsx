import { Product } from "@/models/Product";
import {
  Button,
  ButtonGroup,
  Card,
  Divider,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Router from "next/router";
import { ModalWarning } from "../modal-card-warning";

interface Props {
  data: Product;
}

export function CardProduct({ data }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const payment = useDisclosure();
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
  function handlePayment() {
    let user = localStorage.getItem("ps-current-user");

    if (user) {
      user = JSON.parse(user);
      Router.push(`/payment/${data.id}`);
      return;
    }

    payment.onOpen();
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

      <ModalWarning
        isOpen={isOpen}
        onClose={onClose}
        color="yellow.200"
        msg="ADICIONAR o item no carrinho "
      />
      <ModalWarning
        isOpen={payment.isOpen}
        onClose={payment.onClose}
        color="blue.400"
        msg="COMPRAR o item "
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
            handlePayment();
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
    </Card>
  );
}
