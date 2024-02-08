import { merriweather } from "@/fonts/merriweather";
import {
  EmailObject,
  verifyEmail,
  joinMailingList,
} from "@/lib/helper-functions";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import HeadComponent from "../components/HeadComponent";
import Header from "../components/Header";

/**
 * The About Page
 *
 * @returns AboutPage component
 */
export default function AboutPage() {
  // State used for adding a user to the mailing list
  const [email, setEmail] = useState<EmailObject>({
    emailAddress: "",
    isError: false,
    errorMessage: "",
    submittedSuccessfully: false,
  });

  // Description of the page used for the header
  const headerDescription = "About Fred Asamoah Jr. Ever since Fred Asamoah Jr was a child, he has loved to create stories. Growing up...";

  return (
    <>
      <HeadComponent title="About | Fred Asamoah Jr" description={headerDescription} />
      <Box as="main" height={"100%"}>
        <Flex width={"100%"} direction={"column"}>
          <Header textColor="black" />
          <Flex
            py={{ base: 16, md: 32 }}
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
              Ever since Fred Asamoah Jr was a child, he has loved to create
              stories. Growing up, his love for storytelling was cultivated
              through poetry and his penchant for creating backstories for his
              favorite toys and video game characters. That urge to create has
              led him to write his first book, in the fantasy series{" "}
              <strong>
                <i>The Pivot</i>
              </strong>
              .
              <br />
              <br />
              That same urge led Fred to become a software developer, where he
              gets to create applications and programs for a living. In his free
              time he enjoys playing the bass guitar to produce sounds and
              melodies that come to him. If he&apos;s not doing anything
              mentioned above (he&apos;s too old for toys now), he&apos;s
              watching anime (probably Cowboy Bebop for the millionth time),
              playing his Playstation or listening to music.
            </Text>
          </Flex>
        </Flex>
        {/** Newletter Sign Up*/}
        <Flex
          py={{ base: 8, md: 16 }}
          width={"100%"}
          justify={"center"}
          align={"center"}
          direction={"column"}
          bgColor={"blackAlpha.100"}
          px={{ base: 4 }}
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
                      variant={"solid"}
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
