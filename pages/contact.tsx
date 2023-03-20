import Header from "@/components/Header";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import HeadComponent from "../components/HeadComponent";

/**
 * Contact Page
 *
 * @returns ContactPage Component
 */
export default function ContactPage() {
  return (
    <>
      <HeadComponent title="Contact | Frederick Asamoah Jr" />
      <Box as="main" height={"100vh"}>
        <Flex width={"100%"} direction={"column"}>
          <Header />
          <Flex w={"100%"} direction={"column"} py={{base: 8, md: 32}}>
            <Text textStyle={"h2"} mb={8}>
              Contact Me
            </Text>
            {/** Contact Form */}
            <form id="submit-contact" onSubmit={() => {}}>
              <VStack spacing={6} width={{base: '90%', sm: '80%', md: '70%', lg: "40%"}} mx={"auto"}>
                {/** Name */}
                <FormControl isRequired>
                  <FormLabel fontSize={14}>Name</FormLabel>
                  <Input
                    type={"text"}
                    variant={"outline"}
                    size={"md"}
                    fontSize={16}
                  />
                </FormControl>

                {/** Email */}
                <FormControl isRequired>
                  <FormLabel fontSize={14}>Email</FormLabel>
                  <Input type={"text"} variant={"outline"} fontSize={16} />
                </FormControl>

                {/** Subject */}
                <FormControl isRequired>
                  <FormLabel fontSize={14}>Subject</FormLabel>
                  <Input type={"text"} variant={"outline"} fontSize={16} />
                </FormControl>

                {/** Message */}
                <FormControl isRequired>
                  <FormLabel fontSize={14}>Message</FormLabel>
                  <Textarea variant={"outline"} fontSize={16} />
                </FormControl>

                <Button
                  as={motion.button}
                  whileHover={{ scale: 0.9, transition: { duration: 0.1 } }}
                  whileTap={{ scale: 0.8, borderRadius: "5%" }}
                  fontWeight={400}
                  color={"white"}
                  size={"lg"}
                  bgColor={"black"}
                  _hover={{ bgColor: "gray.700" }}
                >
                  Submit
                </Button>
              </VStack>
            </form>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
