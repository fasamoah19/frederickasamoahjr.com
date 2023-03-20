import {
  Flex,
  Spacer,
  HStack,
  Text,
  Show,
  Hide,
  Link,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import TextWithUnderlineHoverComponent from "./TextWithUnderlineHoverComponent";
import { HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import MenuDrawer from "./modals/MenuDrawer";

// Props necessary for the Header
type HeaderProps = {
  textColor?: string; // The text color received will determine the hover underline cover effect
};

/**
 * Header for the website
 *
 * @param param0 HeaderProps
 * @returns
 */
export default function Header({ textColor = "black" }: HeaderProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <MenuDrawer isOpen={isOpen} onClose={onClose} />
      <Box as="header" py={4} width={"100%"}>
        <Flex
          w={"90%"}
          direction={"row"}
          align={"center"}
          mx="auto"
          color={textColor}
        >
          <Text textStyle={"headerText"}>frederick.asamoah.jr</Text>
          <Spacer />
          <HStack spacing={8}>
            <Show above="md">
              <Link as={NextLink} passHref href={"/"}>
                <TextWithUnderlineHoverComponent
                  text={"home"}
                  underlineColor={textColor}
                />
              </Link>
              <Link as={NextLink} passHref href={"/about"}>
                <TextWithUnderlineHoverComponent
                  text={"about"}
                  underlineColor={textColor}
                />
              </Link>
              <Link as={NextLink} passHref href={"/contact"}>
                <TextWithUnderlineHoverComponent
                  text={"contact"}
                  underlineColor={textColor}
                />
              </Link>
            </Show>
            <Hide above="md">
              <HamburgerIcon boxSize={6} onClick={onOpen} />
            </Hide>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
