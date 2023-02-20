import { suranna } from "@/fonts/suranna";
import { Flex, Spacer, HStack, Text, Show, Hide } from "@chakra-ui/react";
import TextWithUnderlineHoverComponent from "./TextWithUnderlineHoverComponent";
import { HamburgerIcon, WarningTwoIcon } from "@chakra-ui/icons";

/** Header for the website */
export default function Header() {
  return (
    <Flex w={"80%"} direction={"row"} align={"center"} mx="auto" py={4}>
      <Text fontFamily={suranna.style.fontFamily} fontSize={24}>
        frederick.asamoah.jr
      </Text>
      <Spacer />
      <HStack>
        <TextWithUnderlineHoverComponent text="under.construction" />
        <WarningTwoIcon color={'orange.400'} boxSize={4} />
      </HStack>
      {/* <Text fontFamily={suranna.style.fontFamily} fontSize={24}>under.construction <WarningTwoIcon color={'orange.400'} boxSize={4}></WarningTwoIcon></Text> */}
      {/* <HStack spacing={8}>
        <Show above="md">
          <TextWithUnderlineHoverComponent text={"home"} />
          <TextWithUnderlineHoverComponent text={"about"} />
          <TextWithUnderlineHoverComponent text={"contact"} />
        </Show>
        <Hide above="md">
          <HamburgerIcon />
        </Hide>
      </HStack> */}
    </Flex>
  );
}
