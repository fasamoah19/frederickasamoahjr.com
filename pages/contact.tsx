import Header from "@/components/Header";
import { suranna } from "@/fonts/suranna";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Spacer,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import HeadComponent from "../components/HeadComponent";

export default function ContactPage() {
  return (
    <>
      <HeadComponent title="Contact | Frederick Asamoah Jr" />

      <Box as={"main"}>
        <Flex
          bgColor={"rgba(98, 72, 42, 0.2)"}
          direction={"column"}
          width={"100%"}
          height={{ base: "100%", md: "100vh" }}
        >
          <Header />
          <Flex
            w={"100%"}
            direction={"row"}
            justify={"center"}
            py={16}
          >
            <Image
              src="/fred-contact-page-image.jpg"
              width={300}
              height={400}
              borderRadius={4}
              boxShadow={"md"}
            />
            <Spacer maxW={48} h={2} />
            <form id="submit-contact" onSubmit={() => {}}>
              <VStack spacing={6} width={'100%'}>
                <FormControl>
                <FormLabel fontFamily={suranna.style.fontFamily} fontSize={18}>
                  Name
                </FormLabel>
                <Input
                  type={"text"}
                  variant={"filled"}
                  fontSize={16}
                  fontFamily={suranna.style.fontFamily}
                />
              </FormControl>

              <FormControl>
                <FormLabel fontFamily={suranna.style.fontFamily} fontSize={18}>
                  Email
                </FormLabel>
                <Input
                  type={"text"}
                  variant={"filled"}
                  fontSize={16}
                  fontFamily={suranna.style.fontFamily}
                />
              </FormControl>

              <FormControl>
                <FormLabel fontFamily={suranna.style.fontFamily} fontSize={18}>
                  Subject
                </FormLabel>
                <Input
                  type={"text"}
                  variant={"filled"}
                  fontSize={16}
                  fontFamily={suranna.style.fontFamily}
                />
              </FormControl>

              <FormControl>
                <FormLabel fontFamily={suranna.style.fontFamily} fontSize={18}>
                  Message
                </FormLabel>
                <Textarea
                  variant={"filled"}
                  fontSize={16}
                  fontFamily={suranna.style.fontFamily}
                />
              </FormControl>
              </VStack>
            </form>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
