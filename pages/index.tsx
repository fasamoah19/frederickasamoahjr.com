import HeadComponent from "@/components/HeadComponent";
import Header from "@/components/Header";
import { suranna } from "@/fonts/suranna";
import {
  Flex,
  HStack,
  Tag,
  Text,
  Image,
  Circle,
  Show,
  Hide,
} from "@chakra-ui/react";
import { useRef } from "react";

/**
 * Home Page
 *
 * @returns Home Page component
 */
export default function Home() {
  const componentRef = useRef<HTMLInputElement>(null);

  const scrollToSectionAfterExpanded = () => {
    componentRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <>
      <HeadComponent title="Home | Fred Asamoah Jr" />
      <Flex
        bgColor={"#E3E1DE"}
        direction={"column"}
        width={"100%"}
      >
        {/** Header */}
        <Header />

        {/** Book Cover Section */}
        <Flex py={4} direction={"column"} align={"center"} width={"100vw"} as={'section'}>
          <Image
            pos={"relative"}
            src={"/Book Cover Template.png"}
            alt={"Book cover placeholder"}
            height={{ base: 400, md: 600 }}
            zIndex={1}
            width={{ base: 250, md: 450 }}
            onClick={scrollToSectionAfterExpanded}
            _hover={{cursor: 'pointer'}}
          />
          <Show above="lg">
            {/* <Text
              pos={"absolute"}
              top={350}
              textAlign={"center"}
              fontFamily={suranna.style.fontFamily}
              fontSize={"68px"}
              textColor={"gray"}
              zIndex={0}
              letterSpacing={"30px"}
            >
              Trinity Bound by Fate Series
            </Text> */}
          </Show>
          <Hide above="lg">
            <Text
              pos={"absolute"}
              top={{ base: 40, md: 50 }}
              textAlign={"center"}
              fontFamily={suranna.style.fontFamily}
              fontSize={{ base: "44px", md: "68px" }}
              textColor={"gray"}
              zIndex={0}
              letterSpacing={{ base: 0, sm: 16, md: 30 }}
            >
              The
              <br />
              <br />
              Precarious
              <br />
              <br />
              Pivot
            </Text>
          </Hide>
        </Flex>

        {/** Book Title Section */}
        <Flex direction={"column"} py={4} w={"80%"} mx={"auto"} as={'section'}>
          <Text fontFamily={suranna.style.fontFamily} fontSize={"4xl"}>
            The Pivot
          </Text>
          <Text
            fontFamily={suranna.style.fontFamily}
            fontSize={"xl"}
            fontStyle={"italic"}
          >
            Book One in the Trinity Bound by Fate Series
          </Text>
          <HStack pt={4} spacing={4}>
            <Tag
              boxShadow={"md"}
              borderRadius={12}
              size={"lg"}
              variant="subtle"
              colorScheme="gray"
              fontStyle={suranna.style.fontFamily}
              pos="relative"
              top={0}
              transition="top 0.25s ease"
              _hover={{ top: -2 }}
            >
              Fantasy
            </Tag>
            <Tag
              boxShadow={"md"}
              borderRadius={12}
              size={"lg"}
              variant="subtle"
              colorScheme="gray"
              fontStyle={suranna.style.fontFamily}
              pos="relative"
              top={0}
              transition="top 0.25s ease"
              _hover={{ top: -2 }}
            >
              Sci-Fi
            </Tag>
          </HStack>
        </Flex>

        {/** Circle navigation */}
        <Flex py={4} width={"100%"} justify={"center"} gap={4} as={'section'}>
          <Circle size={"10px"} bg={"black"} />
        </Flex>
      </Flex>

      {/** Book Information / Sumamry */}
      <Flex
        as={"section"}
        id={'book-summary'}
        ref={componentRef}
        mt={8}
        py={32}
        width={"100%"}
        justify={"center"}
        align={"start"}
        gap={{ base: 4, md: 8, xl: 16 }}
        direction={{ base: "column", md: "row" }}
      >
        <Show above="sm">
          <Flex
            justify={"center"}
            align={"center"}
            direction={"column"}
            mx={{ base: "auto", md: 0 }}
          >
            <Image
              src={"/Book Cover Template.png"}
              alt={"Book cover placeholder"}
              height={500}
              width={380}
            />
          </Flex>
        </Show>

        <Flex
          align={{ base: "center", md: "normal" }}
          textAlign={"start"}
          maxW={{ base: "80%", md: "440px" }}
          direction={"column"}
          mx={{base: 'auto', md: 4}}
          >
          <Text
            fontSize={{ base: 28, sm: 36 }}
            fontFamily={suranna.style.fontFamily}
          >
            Summary
          </Text>

          <Text mt={4} fontFamily={suranna.style.fontFamily} fontSize={18}>
            What does it mean to be blessed with a power that when drawn upon
            harms everyone near them?
            <br />
            <br />
            How does one embrace a pivot towards their destiny when everything
            they know and love has to be left behind?
            <br />
            <br />
            These are all questions recent college graduate Daniel Ansah finds
            himself answering after he awakens a mysterious power within him,
            injuring numerous people while trying to do what he was trained to
            do –– be a mental health clinician.
            <br />
            <br />
            Turned on, sold out, and hunted by the same people he swore to help
            heal, Daniel is given another chance at life when his powers save
            him and take him to a distant planet named Rathim. Kamuria –– a
            small village with a large heart –– welcomes Daniel with open arms
            and contains everything Daniel needs to heal and realize his true
            destiny.
            <br />
            <br />
            However, with the pain and trauma Daniel has suffered on Earth, he
            may be beyond saving.
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
