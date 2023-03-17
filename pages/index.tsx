import HeadComponent from "@/components/HeadComponent";
import Header from "@/components/Header";
import {
  Flex,
  HStack,
  Tag,
  Text,
  Image,
  Circle,
  Box,
  VStack,
  Button,
  ButtonGroup,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { merriweather } from "@/fonts/merriweather";
import BetaReadSignUpDrawer from "@/components/BetaReadSignUpDrawer";

/**
 * Home Page
 *
 * @returns Home Page component
 */
export default function Home() {
  const synopsisRef = useRef<HTMLInputElement>(null);
  const excerptRef = useRef<HTMLInputElement>(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const scrollToSectionAfterExpanded = (option: "EXCERPT" | "SYNOPSIS") => {
    if (option == "SYNOPSIS") {
      synopsisRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      excerptRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <BetaReadSignUpDrawer isOpen={isOpen} onClose={onClose} />
      <HeadComponent title="Home | Fred Asamoah Jr" />
      <Box>
        <Flex
          bgImage={"/images/image-manipulation-3442184.jpg"}
          layerStyle="flexImageContainer900H"
        >
          <Flex
            pb={8}
            direction="column"
            align="center"
            pos="relative"
            w="100%"
            h="inherit"
            bgColor="blackAlpha.300"
            px={{ base: 4, md: 0 }}
            minHeight={"inherit"}
          >
            <Header textColor="white" />

            {/** Book Cover Section */}
            <Flex
              py={32}
              align={"top"}
              width={"100%"}
              as={motion.section}
              justify={"center"}
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 1.25, delay: 0.25, type: "tween" },
              }}
            >
              <Image
                pos={"relative"}
                src={"/Book Cover Template.png"}
                alt={"Book cover placeholder"}
                height={{ base: 400, md: 500 }}
                width={{ base: 250, md: 340 }}
                onClick={() => scrollToSectionAfterExpanded("SYNOPSIS")}
                _hover={{ cursor: "pointer" }}
              />

              <Box w={20} />
              <Flex direction={"column"}>
                <Text textStyle={"h1"}>The Pivot</Text>
                {/** Book Title Section */}
                <VStack
                  direction={"column"}
                  py={4}
                  align={"start"}
                  justify={"start"}
                  spacing={12}
                >
                  <Text textStyle={"h2Caption"} maxW={"400px"}>
                    Book One in the Trinity Bound by Fate Series
                  </Text>
                  <HStack spacing={4}>
                    <Tag
                      boxShadow={"md"}
                      size={"md"}
                      variant="subtle"
                      colorScheme="gray"
                      fontStyle={merriweather.style.fontFamily}
                    >
                      Sci-Fi / Fantasy
                    </Tag>
                    <Tag
                      boxShadow={"md"}
                      size={"md"}
                      variant="subtle"
                      colorScheme="gray"
                      fontStyle={merriweather.style.fontFamily}
                    >
                      New Adult (18-30)
                    </Tag>
                  </HStack>

                  {/** Sign Up to Beta Read */}
                  <ButtonGroup spacing={4}>
                    <Button
                      as={motion.button}
                      whileHover={{ scale: 0.9, transition: { duration: 0.1 } }}
                      whileTap={{ scale: 0.8, borderRadius: "5%" }}
                      fontWeight={merriweather.style.fontWeight}
                      color={"white"}
                      size={"md"}
                      bgColor={"black"}
                      _hover={{ bgColor: "gray.700" }}
                      onClick={onOpen}
                    >
                      SIGN UP TO BETA READ
                    </Button>
                    <Button
                      as={motion.button}
                      whileHover={{ scale: 0.9, transition: { duration: 0.1 } }}
                      whileTap={{ scale: 0.8, borderRadius: "5%" }}
                      fontWeight={merriweather.style.fontWeight}
                      color={"white"}
                      size={"md"}
                      bgColor={"black"}
                      _hover={{ bgColor: "gray.700" }}
                      onClick={() => scrollToSectionAfterExpanded("EXCERPT")}
                    >
                      READ EXCERPT
                    </Button>
                  </ButtonGroup>
                </VStack>
              </Flex>
            </Flex>
            {/** Circle navigation */}
            <Flex width={"100%"} justify={"center"} as={"section"}>
              <Circle size={"10px"} bg={"white"} />
            </Flex>
          </Flex>
        </Flex>

        {/** Book Information / Sumamry */}
        <Flex
          as={motion.section}
          id={"book-summary"}
          bgColor={"white"}
          ref={synopsisRef}
          py={32}
          width={"100%"}
          justify={"center"}
          align={"start"}
          direction={"column"}
        >
          <Flex
            justify={"center"}
            w={{ base: "90%", sm: "70%", md: "60%" }}
            direction={"column"}
            mx={"auto"}
            as={motion.section}
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1.25 } }}
            viewport={{ once: true }}
          >
            <Text textStyle={"h2"} mb={4}>
              Synopsis
            </Text>

            <Text
              mt={4}
              fontFamily={merriweather.style.fontFamily}
              fontSize={18}
              textAlign={"justify"}
            >
              Daniel Ansah, a recent college graduate, is striving towards his
              dream to become a mental health clinician. But that dream is
              shattered as he awakens a dark energy within, causing him to leave
              trails of blood every time he activates it.
              <br />
              <br />
              Labeled as a demon and a threat to the world, his family and
              friends shun him, while the U.S. government attempts to weaponize
              him for global domination.
              <br />
              <br />
              With his powers still a mystery, Daniel teleports himself to a
              foreign planet where the locals demand that he confront his trauma
              before he&apos;s allowed to stay. With nowhere to go, Daniel
              accepts their terms with crossed fingers, plotting to keep his
              past hidden as long as possible.
              <br />
              <br />
              His decision places the entire village at risk of death not only
              because of his uncontrolled powers, but that his presence
              re-awakens an old foe of their village&apos;s leader. This foe
              comes with a warning. Hand over Daniel or prepare for war.
              <br />
              <br />
              Will Daniel be able to pivot to realize his destiny? Or will he
              leave a blood trail on this planet as well?
            </Text>
          </Flex>
        </Flex>

        {/** Exercept Section */}
        <Flex
          id="excerpt"
          layerStyle="flexImageContainerFitContent"
          as={"section"}
          bgImage={"/images/washington-1216630.jpg"}
        >
          <Flex
            direction="column"
            align="center"
            pos="relative"
            w="100%"
            h="inherit"
            bgColor="blackAlpha.600"
            py={32}
            ref={excerptRef}
            px={{ base: 4, md: 0 }}
          >
            <Text textStyle={"h2"} mb={8}>
              Excerpt
            </Text>
            <Flex
              as={motion.div}
              width={"100%"}
              justify={"center"}
              align={"center"}
              direction={"column"}
              gap={8}
              w={{ base: "90%", sm: "70%", md: "60%" }}
              mx={"auto"}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1.25 } }}
              viewport={{ once: true }}
            >
              <Text textStyle={"excerpt"}>
                &ldquo;He looked down and saw his arms and legs surrounded by a
                jet-black aura. The aura expanded exponentially until it
                retracted to the center of his abdomen and sent a shockwave all
                around the Union Station area of D.C. The force of the shockwave
                sent cars flying into buildings and flung people into poles only
                for them to land on clumps of shimmering concrete.&rdquo;
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {/** Newletter Sign Up*/}
        <Flex
          py={32}
          width={"100%"}
          justify={"center"}
          align={"center"}
          direction={"column"}
        >
          <Text fontFamily={merriweather.style.fontFamily} fontSize={"4xl"}>
            Sign Up For My Newsletter
          </Text>
        </Flex>
      </Box>
    </>
  );
}
