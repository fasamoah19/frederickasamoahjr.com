import { suranna } from "@/fonts/suranna";
import { Flex, Spacer, HStack, Text, Show, Hide, Link } from "@chakra-ui/react";
import TextWithUnderlineHoverComponent from "./TextWithUnderlineHoverComponent";
import { HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

/** Header for the website */
export default function Header() {
  return (
    <Flex w={"90%"} direction={"row"} align={"center"} mx="auto" py={4}>
      <Text fontFamily={suranna.style.fontFamily} fontSize={24}>
        frederick.asamoah.jr
      </Text>
      <Spacer />
      <HStack spacing={8}>
        <Show above="md">
          <Link as={NextLink} passHref href={"/"}>
            <TextWithUnderlineHoverComponent text={"home"} />
          </Link>
          <Link as={NextLink} passHref href={"/about"}>
            <TextWithUnderlineHoverComponent text={"about"} />
          </Link>
          <TextWithUnderlineHoverComponent text={"contact"} />
        </Show>
        <Hide above="md">
          <HamburgerIcon />
        </Hide>
      </HStack>
    </Flex>
  );
}
