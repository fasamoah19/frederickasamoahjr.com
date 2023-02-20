import { suranna } from "@/fonts/suranna";
import { Flex, Spacer, HStack, Text, Show, Hide } from "@chakra-ui/react";
import TextWithUnderlineHoverComponent from "./TextWithUnderlineHoverComponent";
import { HamburgerIcon } from "@chakra-ui/icons";

/** Header for the website */
export default function Header() {
  return (
    <Flex w={"80%"} direction={"row"} align={"center"} mx="auto" py={4}>
      <Text fontFamily={suranna.style.fontFamily} fontSize={24}>
        frederick.asamoah.jr
      </Text>
      <Spacer />
      <HStack spacing={8}>
        <Show above="md">
          <TextWithUnderlineHoverComponent text={"home"} />
          <TextWithUnderlineHoverComponent text={"about"} />
          <TextWithUnderlineHoverComponent text={"contact"} />
        </Show>
        <Hide above="md">
          <HamburgerIcon />
        </Hide>
      </HStack>
    </Flex>
  );
}
