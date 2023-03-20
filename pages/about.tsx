import { Box, Flex, Image, Text } from "@chakra-ui/react";
import HeadComponent from "../components/HeadComponent";
import Header from "../components/Header";

/**
 * The About Page
 *
 * @returns AboutPage component
 */
export default function AboutPage() {
  return (
    <>
      <HeadComponent title="About | Fred Asamoah Jr" />
      <Box as="main" height={"100%"}>
        <Flex width={"100%"} direction={"column"}>
          <Header textColor="black" />
          <Flex
            py={{ base: 8, md: 32 }}
            as={"section"}
            align={"center"}
            justify={"center"}
            direction={"column"}
            w={{ base: "90%", md: "70%" }}
            mx={"auto"}
            gap={12}
          >
            {/** Section Title */}
            <Text textStyle={"h2"}>About Fred</Text>

            <Image
              mt={-8}
              src="fred-contact-page-image.jpg"
              width={"100%"}
              maxHeight={{ base: "220px", md: "400px" }}
              objectFit={"cover"}
              objectPosition={"center 35%"}
              alt={"fred picture"}
            />

            {/** About me text */}
            <Text textStyle={"paragraph"}>
              Ever since Fred Asamoah Jr was a child, he loved to create
              stories. Whether those stories stemmed from playing with his toys,
              writing poetry, or in video games he played where he had no clue
              what was going on--causing him to make up a story of his own. That
              urge to create led him to write the Sci-Fi / Fantasy novel A
              Trinity Bound by Fate: The Pivot.
              <br />
              <br />
              Fred&apos;s desire to create guided him to become a software
              developer where he creates applications and programs for a living
              (for now). It also led him pick up the bass guitar, to produce
              sounds and melodies that came to him.
              <br />
              <br />
              If he&apos;s not doing anything mentioned above (he&apos;s too old
              for toys now), he&apos;s watching anime (probably Cowboy Bebop for
              the millionth time), playing his Playstation or listening to
              music.
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
