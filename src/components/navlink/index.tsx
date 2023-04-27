import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
interface Props {
  title: string;
  url: string;
}

export function NavLink({ title, url }: Props) {
  return (
    <Link
      as={NextLink}
      color="whiteAlpha.800"
      _hover={{ color: "white", textDecor: "navy" }}
      href={url}
    >
      {title}
    </Link>
  );
}
