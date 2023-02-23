import { Box, Flex, Hide, Image, Show, Text } from "@chakra-ui/react";
import HeadComponent from "../components/HeadComponent";
import Header from "../components/Header";
import { suranna } from "../fonts/suranna";

export default function AboutPage() {
  return (
    <>
      <HeadComponent title="About | Frederick Asamoah Jr" />
      <Box as="main">
        <Flex
          bgColor={"rgba(156, 133, 131, 0.3)"}
          direction={"column"}
          width={"100%"}
          height={{base: '100%', md: "100vh"}}
        >
          <Header />
          <Flex
            as={"section"}
            mt={{base: 0, md: 8}}
            py={8}
            width={"100%"}
            justify={"center"}
            align={"center"}
            gap={{ base: 4, md: 8 }}
            direction={{ base: "column", md: "row" }}
          >
            <Hide above="md">
              <Flex mx={{ base: "auto", md: 4 }} maxWidth={"90%"}>
                <Text
                  textAlign={"center"}
                  fontSize={{ base: 36, sm: 48 }}
                  fontFamily={suranna.style.fontFamily}
                >
                  About Frederick
                </Text>
              </Flex>
            </Hide>
            <Flex
              justify={"center"}
              align={"center"}
              direction={"column"}
              mx={{ base: "auto", md: 4 }}
            >
              <Image
                src={"/fred-about-page-image.JPG"}
                alt={"About fred image"}
                maxHeight={{ base: 400, md: 480 }}
                maxW={{ base: 250, md: 400 }}
                borderRadius={4}
              />
            </Flex>

            <Flex
              align={{ base: "center", md: "normal" }}
              textAlign={"start"}
              maxW={{ base: "90%", md: "560px" }}
              direction={"column"}
              mx={{ base: "auto", md: 4 }}
            >
              <Show above="md">
                <Text
                  fontSize={{ base: 36, sm: 48 }}
                  fontFamily={suranna.style.fontFamily}
                >
                  About Frederick
                </Text>
              </Show>

              <Text mt={4} fontFamily={suranna.style.fontFamily} fontSize={20}>
                Ever since Frederick Asamoah Jr was a child, he loved to create
                stories. Whether those stories stemmed from him playing with his
                toys, writing poetry, or in video games he played where he had
                no clue what was going on--causing him to make up a story of his
                own. That urge to create led him to write the fantasy novel
                Bound: The Precarious Pivot.
                <br />
                <br />
                That desire to create also guided him to become a software
                developer where he creates applications and programs for a
                living (for now). It also steered him pick up the bass guitar,
                to produce sounds and melodies that came to him.
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
