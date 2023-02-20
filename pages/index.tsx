import HeadComponent from "@/components/HeadComponent";
import Header from "@/components/Header";
import { thingsAboutFredInitialValues } from "@/data/fred";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Flex,
  Text,
  Image,
  Box,
  AspectRatio,
  Button,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

/**
 * Home Page
 *
 * @returns Home Page component
 */
export default function Home() {
  const generateRandomNum = () => {
    return Math.floor(
      Math.random() * (thingsAboutFredInitialValues.length - 0) + 0
    );
  };
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    setIndex(generateRandomNum());
  }, []);

  const randomItem = () => {
    setIndex(generateRandomNum());
  };

  const next = () => {
    if (index < thingsAboutFredInitialValues.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const back = () => {
    if (index == 0) {
      setIndex(thingsAboutFredInitialValues.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <>
      <HeadComponent title="Home" />
      <Flex
        as={"section"}
        bgColor={"white"}
        direction={"column"}
        width={"100%"}
        height={"100vh"}
      >
        {/** Header */}
        <Header />
        <Text textAlign={"center"} fontSize={22} mt={8}>
          While the author site is being built, learn a few things about me!
        </Text>
        <Flex
          direction="column"
          my={"auto"}
          align={"center"}
          justify={"center"}
          gap={4}
        >
          <Text textAlign={"center"} fontSize={18}>
            {thingsAboutFredInitialValues[index].interestingFact}
          </Text>
          <Flex my={"auto"} align={"center"} justify={"center"} py={2}>
            <ChevronLeftIcon
              mr={4}
              color={"gray"}
              boxSize={8}
              onClick={back}
              _hover={{ cursor: "pointer" }}
            />
            <VStack spacing={2}>
              {thingsAboutFredInitialValues[index].useIframe ? (
                <AspectRatio maxW="400px" ratio={1} w={"400px"}>
                  {thingsAboutFredInitialValues[index].iframe}
                </AspectRatio>
              ) : (
                <Image
                  src={thingsAboutFredInitialValues[index].imageLocation}
                  height={400}
                  width={"400px"}
                  alt={`Thing about fred - ${thingsAboutFredInitialValues[index].interestingFact}`}
                />
              )}

              <Text textAlign={"center"}>
                {thingsAboutFredInitialValues[index].subText}
              </Text>
            </VStack>
            <ChevronRightIcon
              ml={4}
              color={"gray"}
              boxSize={8}
              _hover={{ cursor: "pointer" }}
              onClick={next}
            />
          </Flex>
          <Button fontWeight={300} onClick={randomItem}>
            Random Fact!
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
