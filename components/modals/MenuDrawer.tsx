import {
  Box,
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
            <Divider
              w={"70%"}
              as={motion.hr}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.75 },
              }}
              borderColor={"gray.400"}
            />
            <Link as={NextLink} href={"/"} onClick={onClose}>
              <Box
                as={motion.div}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.75 },
                }}
              >
                <Text fontSize={"xl"}>HOME</Text>
              </Box>
            </Link>

            <Divider
              as={motion.hr}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.75, delay: 0.25 },
              }}
              w={"70%"}
              borderColor={"gray.400"}
            />
            <Box
              as={motion.div}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.75, delay: 0.5 },
              }}
            >
              <Link as={NextLink} passHref href="/about" onClick={onClose}>
                <Text fontSize={"xl"}>ABOUT</Text>
              </Link>
            </Box>

            <Divider
              as={motion.hr}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.75, delay: 0.5 },
              }}
              w={"70%"}
              borderColor={"gray.400"}
            />
            <Box
              as={motion.div}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.75, delay: 0.75 },
              }}
            >
              <Link as={NextLink} passHref href="/contact" onClick={onClose}>
                <Text fontSize={"xl"}>CONTACT</Text>
              </Link>
            </Box>

            <Divider
              as={motion.hr}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.75, delay: 0.75 },
              }}
              w={"70%"}
              borderColor={"gray.400"}
            />
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
