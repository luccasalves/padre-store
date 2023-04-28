import { Product } from "@/models/Product";
import {
  Button,
  ButtonGroup,
  Card,
  Divider,
  Image,
  Text,
  transform,
} from "@chakra-ui/react";

interface Props {
  data: Product;
}

export function CardProduct({ data }: Props) {
  let BRL_FORMAT = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <Card
      bg={"white"}
      p={4}
      maxW="xs"
      transition={"0.2s"}
      _hover={{ boxShadow: "2xl", translate: "-10px -10px" }}
      cursor={"pointer"}
    >
      <Image
        src={data.url}
        objectFit={"cover"}
        alt="foto do produto"
        mb={4}
        height={"xs"}
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
        <Button variant="solid" colorScheme="blackAlpha" bg={"black"}>
          Comprar
        </Button>
        <Button variant="outline" colorScheme="blue">
          + add carrinho
        </Button>
      </ButtonGroup>
    </Card>
  );
}
