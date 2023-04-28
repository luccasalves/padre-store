import {
  Box,
  Text,
  HStack,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Link from "next/link";
import { NavLink } from "../navlink";

export function Header() {
  return (
    <Box bg={"black"} color={"white"} fontSize={18} fontWeight={"medium"}>
      <HStack justifyContent={"space-between"} p={4} maxW={"1024"} m={"auto"}>
        <Link href={"/"}>
          <Text>🛐 Padre store</Text>
        </Link>
        <nav>
          <HStack gap={4}>
            <NavLink title="Inicio" url="/" />
            <NavLink title="Produtos" url="/store" />
            <NavLink title="Account" url="/auth" />
          </HStack>
        </nav>
      </HStack>
    </Box>
  );
}
