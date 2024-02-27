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
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Divider,
  Hide,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { merriweather } from "@/fonts/merriweather";
import { GiFireSilhouette } from "react-icons/gi";
import { useRouter } from "next/router";
import {
  EmailObject,
  joinMailingList,
  verifyEmail,
} from "@/lib/helper-functions";

/**
 * Home Page
 *
 * @returns Home Page component
 */
export default function Home() {
  // Reference for the synopsis section
  const synopsisRef = useRef<HTMLInputElement>(null);
  // Reference for the excerpt section
  const excerptRef = useRef<HTMLInputElement>(null);
  // Reference for the Newsletter
  const newsletterRef = useRef<HTMLInputElement>(null);
  // Router for page navigation
  const router = useRouter();
  // Description of the page used for the header
  const headerDescription =
    "Author website of Fred Asamoah Jr, the author of Sci-Fi / Fantasy novel: The Pivot";

  // State used for adding a user to the mailing list
  const [email, setEmail] = useState<EmailObject>({
    emailAddress: "",
    isError: false,
    errorMessage: "",
    submittedSuccessfully: false,
  });

  // State used to open and close the beta sign up drawer
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Function for scrolling to a section on the web page.
  const scrollToSection = (option: "EXCERPT" | "SYNOPSIS" | "NEWSLETTER") => {
    if (option == "SYNOPSIS") {
      synopsisRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (option == "NEWSLETTER") {
      newsletterRef.current?.scrollIntoView({
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
      <HeadComponent
        title="Home | Fred Asamoah Jr"
        description={headerDescription}
      />
      <Box bgColor={"white"}>
        <Flex
          bgImage={{ base: "", md: "/images/image-manipulation-3442184.jpg" }}
          layerStyle="flexImageContainer900H"
        >
          <Flex
            pb={8}
            direction="column"
            align="center"
            pos="relative"
            w="100%"
            h="inherit"
            bgColor={{ base: "", md: "blackAlpha.300" }}
            minHeight={"inherit"}
          >
            <Header textColor={{ base: "black", md: "white" }} />

            {/** Book Cover Section */}
            <Flex
              py={{ base: 8, md: 32 }}
              align={{ base: "center", md: "top" }}
              width={{ base: "90%", md: "100%" }}
              mx={"auto"}
              px={{ md: 4 }}
              as={motion.section}
              justify={"center"}
              direction={{ base: "column", md: "row" }}
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
                height={{ base: "full", md: 500 }}
                width={{ base: "full", md: 340 }}
                onClick={() => scrollToSection("SYNOPSIS")}
                _hover={{ cursor: "pointer" }}
              />

              <Box w={{ base: 0, md: 20 }} />
              <Flex
                direction={"column"}
                w={{ base: "100%", md: "fit-content" }}
                pt={{ base: 8, md: 0 }}
                pl={{ md: 1 }}
                align={{ base: "center", md: "start" }}
              >
                <Text textStyle={"h1"} color={"black"}>
                  The Pivot
                </Text>

                {/** Book Title Section */}
                <VStack
                  direction={"column"}
                  py={4}
                  spacing={6}
                  align={{ md: "start" }}
                >
                  <Text textStyle={"h2Caption"} maxW={"400px"} color={"black"}>
                    Book One in the Trinity Bound by Fate Series
                  </Text>
                  <HStack spacing={4} justify={"center"}>
                    <Tag
                      boxShadow={"md"}
                      size={"md"}
                      variant="subtle"
                      colorScheme="gray"
                      fontStyle={merriweather.style.fontFamily}
                    >
                      Contemporary Fantasy
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

                  {/** Button Groups */}
                  <ButtonGroup
                    gap={4}
                    flexDirection={{ base: "column", md: "row" }}
                    spacing={0}
                  >
                    <Button
                      as={motion.button}
                      whileHover={{
                        scale: 0.9,
                        transition: { duration: 0.1 },
                      }}
                      whileTap={{ scale: 0.8, borderRadius: "5%" }}
                      fontWeight={merriweather.style.fontWeight}
                      color={"white"}
                      size={{ base: "md", md: "sm" }}
                      bgColor={"black"}
                      _hover={{ bgColor: "gray.700" }}
                      onClick={() => scrollToSection("NEWSLETTER")}
                    >
                      SUBSCRIBE FOR UPDATES
                    </Button>
                  </ButtonGroup>
                </VStack>
              </Flex>
            </Flex>
            {/** Circle navigation */}
            <Flex width={"100%"} justify={"center"} as={"section"}>
              <Circle size={"10px"} bg={{ base: "black", md: "white" }} />
            </Flex>
          </Flex>
        </Flex>

        <Hide above="md">
          <Divider />
        </Hide>

        {/** Book Information / Sumamry */}
        <Flex
          as={motion.section}
          id={"book-summary"}
          bgColor={"white"}
          ref={synopsisRef}
          py={{ base: 8, md: 32 }}
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
              fontSize={{ base: "md", md: "lg" }}
              textAlign={{ base: "center", md: "justify" }}
            >
              Freshly graduated with a psychology degree, Daniel Ansah struggles
              with a trait that has been fracturing relationships with his
              friends and family&#8212;all without him knowing. He&apos;s quick
              to lend an ear to someone&apos;s problems but even quicker to keep
              people out of his. His life, which he&apos;s devoted to helping
              others, is upended when a mysterious power awakens in him and
              causes him to injure hundreds in his hometown of DC. Unfortunately
              for him, a pattern forms. When that power is activated, a trail of
              blood is left behind him.
              <br />
              <br />
              Labeled as a demon and a threat to the world, his family and
              friends shun him, while the U.S. government attempts to weaponize
              him for global domination. A heated chase leads Daniel into the
              woods when he accidentally teleports himself to a foreign planet.
              <br />
              <br />
              With nowhere to go, Daniel lives amongst the locals while plotting
              to keep his past hidden for as long as possible. This proves to be
              a hard task for him as side-effects of his abilities begin to
              manifest out of his control. His secrecy places the entire village
              at risk not only because he can inadvertently kill them all, but
              also because his presence re-awakens an old foe of their village's
              leader.
              <br />
              <br />
              Weighed with guilt and fear, Daniel must learn to forgive and
              trust again if he wants to prevent a massacre brought by his own
              hands.
            </Text>
          </Flex>
        </Flex>

        <Hide above="md">
          <Divider />
        </Hide>

        {/** Exercept Section */}
        <Flex
          id="excerpt"
          layerStyle="flexImageContainerFitContent"
          as={"section"}
          bgImage={{ md: "/images/washington-1216630.jpg" }}
        >
          <Flex
            direction="column"
            align="center"
            pos="relative"
            w="100%"
            h="inherit"
            bgColor={{ base: "blackAlpha.100", md: "blackAlpha.600" }}
            py={{ base: 8, md: 32 }}
            ref={excerptRef}
            px={{ base: 4, md: 0 }}
          >
            <Text textStyle={"h2"} textColor={{ base: "black", md: "white" }}>
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
              <Text
                textStyle={"excerpt"}
                textColor={{ base: "black", md: "white" }}
              >
                &ldquo;A deep horn and screeching tires shook Daniel in his skin
                as a large, metal missile on wheels hurtled toward them in slow
                motion. He stretched out his arm as a reflex reaction and
                cowered, waiting for his death. Seconds later, Daniel opened his
                eyes to see the vehicle flying into a building. Windows
                shattered from the impact. He looked down and saw his arms and
                legs surrounded by an erratic black aura. The aura retracted to
                Daniel&apos;s chest before releasing a shockwave around the entire
                area. Its sheer force sent vehicles crashing into properties and
                flung pedestrians into poles and walls for them to land on
                clumps of shimmering concrete.&rdquo;
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Hide above="md">
          <Flex width={"100%"}>
            <Divider />
          </Flex>
        </Hide>

        {/** Trigger Warnings */}
        <Flex
          py={{ base: 8, md: 32 }}
          width={"100%"}
          justify={"center"}
          align={"center"}
          bgColor={"blackAlpha.100"}
          direction={"column"}
        >
          <Text textStyle={"h2"}>Content and Trigger Warnings</Text>
          <SimpleGrid
            as={motion.div}
            mt={{ base: 2, md: 8 }}
            columns={{ base: 1, md: 2 }}
            justifyContent={"center"}
            spacing={8}
            width={"70%"}
            mx={"auto"}
          >
            <HStack
              as={motion.div}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1.0 } }}
              viewport={{ once: true }}
              justify={"center"}
              align={"center"}
            >
              <Icon as={GiFireSilhouette} boxSize={5} />
              <Text fontSize={18}>Violence/death (on and off page)</Text>
            </HStack>
            <HStack
              as={motion.div}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1.0 } }}
              viewport={{ once: true }}
              justify={"center"}
              align={"center"}
            >
              <Icon as={GiFireSilhouette} boxSize={5} />
              <Text fontSize={18}>
                Discussion of mental health and past trauma
              </Text>
            </HStack>
            <HStack
              as={motion.div}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1.0 } }}
              viewport={{ once: true }}
              justify={"center"}
              align={"center"}
            >
              <Icon as={GiFireSilhouette} boxSize={5} />
              <Text fontSize={18}>Mentions of Christianity</Text>
            </HStack>
          </SimpleGrid>
        </Flex>
        {/* <Divider h={2} /> */}

        {/** Newletter Sign Up*/}
        <Flex
          py={{ base: 8, md: 16 }}
          width={"100%"}
          justify={"center"}
          align={"center"}
          direction={"column"}
          px={{ base: 4 }}
          ref={newsletterRef}
        >
          <Text textStyle={"h2"}>Sign Up For My Newsletter</Text>
          <Flex align={"end"} direction={"row"}>
            {email.submittedSuccessfully ? (
              <Text
                mt={4}
                fontFamily={merriweather.style.fontFamily}
                fontSize={"md"}
              >
                Successfully joined the newsletter! Be on the look out for
                updates soon.
              </Text>
            ) : (
              <>
                <FormControl isInvalid={email.isError}>
                  <FormLabel fontSize={14}>Email</FormLabel>
                  <HStack gap={6}>
                    <Input
                      type={"text"}
                      variant={"filled"}
                      required
                      value={email.emailAddress}
                      fontSize={"md"}
                      onChange={(event) => {
                        const { invalid, errorMessage } = verifyEmail(event);
                        setEmail({
                          ...email,
                          emailAddress: event.target.value,
                          isError: invalid,
                          errorMessage: errorMessage,
                        });
                      }}
                    />
                    <Button
                      as={motion.button}
                      whileHover={{
                        scale: 0.9,
                        transition: { duration: 0.1 },
                      }}
                      whileTap={{ scale: 0.8, borderRadius: "5%" }}
                      fontWeight={merriweather.style.fontWeight}
                      color={"white"}
                      size="md"
                      bgColor={"black"}
                      _hover={{ bgColor: "gray.700" }}
                      onClick={() => joinMailingList(email, setEmail)}
                    >
                      Submit
                    </Button>
                  </HStack>
                  {email.isError ? (
                    <FormErrorMessage>{email.errorMessage}</FormErrorMessage>
                  ) : (
                    <></>
                  )}
                </FormControl>
              </>
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
