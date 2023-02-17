import { suranna } from "@/fonts/suranna";
import { Flex, Spacer, HStack, Text } from "@chakra-ui/react";
import TextWithUnderlineHoverComponent from "./TextWithUnderlineHoverComponent";

/** Header for the website */
export default function Header() {
  return (
    <Flex w={"80%"} direction={"row"} align={'start'} mx='auto' py={4}>
      <Text fontFamily={suranna.style.fontFamily} fontSize={24}>
        frederick.asamoah.jr
      </Text>
      <Spacer />
      <HStack spacing={8}>
        <TextWithUnderlineHoverComponent text={"home"} />
        <TextWithUnderlineHoverComponent text={"about"} />
        <TextWithUnderlineHoverComponent text={"contact"} />
      </HStack>
    </Flex>
  );
}
