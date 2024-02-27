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

/**
 * Header for the website
 *
 * @param param0 HeaderProps
 * @returns
 */
export default function Header({ ...props }) {
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
          color={props.textColor}
        >
          <Link as={NextLink} passHref href={"/"}>
            <TextWithUnderlineHoverComponent
              text={"fred.asamoah.jr"}
              underlineColor={props.textColor?.md ?? props.textColor}
            />
          </Link>
          <Spacer />
          <HStack spacing={8}>
            <Show above="md">
              <Link as={NextLink} passHref href={"/"}>
                <TextWithUnderlineHoverComponent
                  text={"home"}
                  underlineColor={props.textColor?.md ?? props.textColor}
                />
              </Link>
              <Link as={NextLink} passHref href={"/about"}>
                <TextWithUnderlineHoverComponent
                  text={"about"}
                  underlineColor={props.textColor?.md ?? props.textColor}
                />
              </Link>
              <Link as={NextLink} passHref href={"/contact"}>
                <TextWithUnderlineHoverComponent
                  text={"contact"}
                  underlineColor={props.textColor?.md ?? props.textColor}
                />
              </Link>
            </Show>
            <Hide above="md">
              <HamburgerIcon
                _hover={{ cursor: "pointer" }}
                boxSize={6}
                onClick={onOpen}
              />
            </Hide>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
