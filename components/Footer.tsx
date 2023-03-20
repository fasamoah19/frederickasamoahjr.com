import { merriweather } from "@/fonts/merriweather";
import {
  Box,
  Flex,
  Hide,
  HStack,
  Icon,
  Link,
  Show,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { IoLogoTiktok, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";
import NextLink from "next/link";

/**
 * Footer for the website
 *
 * @returns Footer component
 */
export default function Footer() {
  // Retrieve's the current year to display in the copyright
  const year = new Date().getFullYear();

  return (
    <Box as="footer" w="100%" bg="black" py={16}>
      <Show above="md">
        <HStack width={"90%"} mx={"auto"} align={"center"}>
          {/** Company tag */}
          <Text
            fontFamily={merriweather.style.fontFamily}
            color={"white"}
            fontSize={12}
          >
            Built and designed by <br />
            Wholesome Innovations, LLC
          </Text>
          <Spacer />

          {/** Fred's name and website copyright */}
          <Text
            fontFamily={merriweather.style.fontFamily}
            color={"white"}
            fontSize={12}
            pr={12}
          >
            © {year} Frederick Asamoah Jr, All rights reserved.
          </Text>
          {/** Social Media handles. Add links */}
          <HStack spacing={4} color={"white"}>
            <Link
              as={NextLink}
              passHref
              href="https://www.tiktok.com/@fred_asamoah_jr_write?is_from_webapp=1&sender_device=pc"
              target={"_blank"}
            >
              <Icon
                as={IoLogoTiktok}
                boxSize={4}
                pos="relative"
                top={0}
                transition="top 0.25s ease"
                _hover={{ top: -2 }}
              />
            </Link>

            <Link
              as={NextLink}
              passHref
              href={"https://www.instagram.com/fred_asamoah_jr_write/"}
              target={"_blank"}
            >
              <Icon
                as={IoLogoInstagram}
                boxSize={4}
                pos="relative"
                top={0}
                transition="top 0.25s ease"
                _hover={{ top: -2 }}
              />
            </Link>

            <Link
              as={NextLink}
              passHref
              href="https://twitter.com/RealFredAsamoah"
              target={"_blank"}
            >
              <Icon
                as={IoLogoTwitter}
                boxSize={4}
                pos="relative"
                top={0}
                transition="top 0.25s ease"
                _hover={{ top: -2 }}
              />
            </Link>
          </HStack>
        </HStack>
      </Show>
      <Hide above="md">
        {/** Social Media handles. Add links */}
        <Flex
          width={"100%"}
          direction={"column"}
          align={"center"}
          justify={"center"}
          gap={8}
        >
          {/** Fred's name and website copyright */}
          <Text
            fontFamily={merriweather.style.fontFamily}
            color={"white"}
            fontSize={12}
          >
            © {year} Frederick Asamoah Jr, All rights reserved.
          </Text>
          {/** Social Media handles. Add links */}

          <HStack spacing={4} color={"white"}>
            <Link
              as={NextLink}
              passHref
              href="https://www.tiktok.com/@fred_asamoah_jr_write?is_from_webapp=1&sender_device=pc"
              target={"_blank"}
            >
              <Icon
                as={IoLogoTiktok}
                boxSize={4}
                pos="relative"
                top={0}
                transition="top 0.25s ease"
                _hover={{ top: -2 }}
              />
            </Link>

            <Link
              as={NextLink}
              passHref
              href={"https://www.instagram.com/fred_asamoah_jr_write/"}
              target={"_blank"}
            >
              <Icon
                as={IoLogoInstagram}
                boxSize={4}
                pos="relative"
                top={0}
                transition="top 0.25s ease"
                _hover={{ top: -2 }}
              />
            </Link>

            <Link
              as={NextLink}
              passHref
              href="https://twitter.com/RealFredAsamoah"
              target={"_blank"}
            >
              <Icon
                as={IoLogoTwitter}
                boxSize={4}
                pos="relative"
                top={0}
                transition="top 0.25s ease"
                _hover={{ top: -2 }}
              />
            </Link>
          </HStack>
          <Text
            fontFamily={merriweather.style.fontFamily}
            color={"white"}
            fontSize={12}
          >
            Built and designed by Wholesome Innovations, LLC
          </Text>
        </Flex>
      </Hide>
    </Box>
  );
}
