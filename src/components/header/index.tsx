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
    <Box
      bg={"blackAlpha.900"}
      color={"white"}
      fontSize={18}
      fontWeight={"medium"}
    >
      <HStack justifyContent={"space-between"} p={4} maxW={"1024"} m={"auto"}>
        <Text>🛐 Padre store</Text>
        <nav>
          <HStack gap={4}>
            <NavLink title="Inicio" url="/" />
            <NavLink title="Produtos" url="/products" />
            <NavLink title="Account" url="/account" />
          </HStack>
        </nav>
      </HStack>
    </Box>
  );
}
