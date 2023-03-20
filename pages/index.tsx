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
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { merriweather } from "@/fonts/merriweather";
import BetaReadSignUpDrawer from "@/components/BetaReadSignUpDrawer";
import { GiFireSilhouette } from "react-icons/gi";
import { useRouter } from "next/router";

/**
 * Home Page
 *
 * @returns Home Page component
 */
export default function Home() {
  const synopsisRef = useRef<HTMLInputElement>(null);
  const excerptRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

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
      <Box bgColor={"white"}>
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
                src={"/Book Cover Template To Export.png"}
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
                      onClick={() => router.push("/the-pivot/prologue")}
                    >
                      READ PROLOGUE
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
            <Text textStyle={"h2"}>Synopsis</Text>

            <Text
              mt={4}
              fontFamily={merriweather.style.fontFamily}
              fontSize={18}
              textAlign={"justify"}
            >
              Daniel Ansah, a recent college graduate, is striving towards his
              dream to become a mental health clinician. That dream is shattered
              when he awakens a dark energy within. Every time it activates, he
              leaves a trail of blood behind him.
              <br />
              <br />
              Labeled as a demon and a threat to the world, his family and
              friends shun him, while the U.S. government attempts to weaponize
              him for global domination. Until the day of a heated chase, when
              Daniel accidentally teleports himself to a foreign planet.
              <br />
              <br />
              With nowhere to go, Daniel must learn to live amongst the locals
              while plotting to keep his past hidden for as long as possible.
              His decision places the entire village at risk not only because of
              his uncontrolled powers, but also because his presence re-awakens
              an old foe of their village&apos;s leader.
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
            <Text textStyle={"h2"}>Excerpt</Text>
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
        {/** Trigger Warnings */}
        <Flex
          py={32}
          width={"100%"}
          justify={"center"}
          align={"center"}
          direction={"column"}
        >
          <Text textStyle={"h2"}>Content and Trigger Warnings</Text>
          <SimpleGrid
            as={motion.div}
            mt={8}
            columns={{ base: 1, md: 2 }}
            justifyContent={"center"}
            spacing={8}
            width={"70%"}
            mx={"auto"}
          >
            <HStack
              as={motion.div}
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1.0 } }}
              viewport={{ once: true }}
              justify={"center"}
              align={"center"}
            >
              <Icon as={GiFireSilhouette} boxSize={5} />
              <Text fontSize={18}>Violence</Text>
            </HStack>
            <HStack
              as={motion.div}
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1.0 } }}
              viewport={{ once: true }}
              justify={"center"}
              align={"center"}
            >
              <Icon as={GiFireSilhouette} boxSize={5} />
              <Text fontSize={18}>Mental Health</Text>
            </HStack>
            <HStack
              as={motion.div}
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1.0 } }}
              viewport={{ once: true }}
              justify={"center"}
              align={"center"}
            >
              <Icon as={GiFireSilhouette} boxSize={5} />
              <Text fontSize={18}>Harm to children</Text>
            </HStack>
            <HStack
              as={motion.div}
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1.0 } }}
              viewport={{ once: true }}
              justify={"center"}
              align={"center"}
            >
              <Icon as={GiFireSilhouette} boxSize={5} />
              <Text fontSize={18}>Therapy</Text>
            </HStack>
            <HStack
              as={motion.div}
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1.0 } }}
              viewport={{ once: true }}
              justify={"center"}
              align={"center"}
            >
              <Icon as={GiFireSilhouette} boxSize={5} />
              <Text fontSize={18}>Religion</Text>
            </HStack>
          </SimpleGrid>
        </Flex>

        {/** Newletter Sign Up*/}
        {/* <Flex
          py={32}
          width={"100%"}
          justify={"center"}
          align={"center"}
          direction={"column"}
        >
          <Text fontFamily={merriweather.style.fontFamily} fontSize={"4xl"}>
            Sign Up For My Newsletter
          </Text>
        </Flex> */}
      </Box>
    </>
  );
}
