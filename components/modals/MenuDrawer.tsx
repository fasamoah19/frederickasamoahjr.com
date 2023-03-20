import {
  Center,
  Container,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";

/** Props necessary for the component */
type MenuDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

/**
 * MenuDrawer to display the menu for mobile and tablet visitors
 * 
 * @param param0 MenuDrawer props
 * @returns MenuDrawer component
 */
export default function MenuDrawer({ isOpen, onClose }: MenuDrawerProps) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} size={"md"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody height={"100%"} py={"25%"}>
          <Flex
            as={motion.div}
            direction={"column"}
            width={"100%"}
            justify={"center"}
            align={"center"}
            gap={8}
          >
            <Divider w={"70%"} />
            <Link as={NextLink} href={"/"} onClick={onClose}>
              <Text fontSize={"xl"}>HOME</Text>
            </Link>
            <Divider w={"70%"} />
            <Link as={NextLink} passHref href="/the-pivot/prologue" onClick={onClose}>
              <Text fontSize={"xl"}>THE PIVOT - PROLOGUE</Text>
            </Link>
            <Divider w={"70%"} />
            <Link as={NextLink} passHref href="/about" onClick={onClose}>
              <Text fontSize={"xl"}>ABOUT</Text>
            </Link>
            <Divider w={"70%"} />
            <Link as={NextLink} passHref href="/contact" onClick={onClose}>
              <Text fontSize={"xl"}>CONTACT</Text>
            </Link>
            <Divider w={"70%"} />
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
