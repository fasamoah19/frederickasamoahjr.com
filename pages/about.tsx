import { Box, Flex, Text } from "@chakra-ui/react";
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
      <HeadComponent title="About | Frederick Asamoah Jr" />
      <Box as="main">
        <Flex
          as={"section"}
          width={"100%"}
          justify={"center"}
          direction={"column"}
          bgImage={"/fred-contact-page-image.jpg"}
          align={"center"}
          bgPos="center 40%"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgAttachment="fixed"
          color={"white"}
          minHeight={{ base: "fit-content", md: "900px" }}
        >
          <Flex
            direction="column"
            align="center"
            pos="relative"
            w="100%"
            minHeight={"inherit"}
            bgColor="blackAlpha.700"
          >
            {/** Header */}
            <Header textColor="white" />

            {/** About Frederick Section */}
            <Flex
              py={32}
              align={"center"}
              width={"100%"}
              as={"section"}
              justify={"center"}
              direction={"column"}
              w={{ base: "90%", sm: "70%", md: "70%", lg: "60%" }}
              mx={"auto"}
            >
              {/** Section Title */}
              <Text textStyle={"h2"} mb={8}>
                About Frederick
              </Text>

              {/** About me text */}
              <Text textStyle={"paragraph"}>
                Ever since Frederick Asamoah Jr was a child, he loved to create
                stories. Whether those stories stemmed from playing with his
                toys, writing poetry, or in video games he played where he had
                no clue what was going on--causing him to make up a story of his
                own. That urge to create led him to write the Sci-Fi / Fantasy
                novel A Trinity Bound by Fate: The Pivot.
                <br />
                <br />
                Frederick&apos;s desire to create guided him to become a software
                developer where he creates applications and programs for a
                living (for now). It also led him pick up the bass guitar, to
                produce sounds and melodies that came to him.
                <br />
                <br />
                If he&apos;s not doing anything mentioned above (he&apos;s too
                old for toys now), he&apos;s watching anime (probably Cowboy
                Bebop for the millionth time), playing his Playstation or
                listening to music.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
