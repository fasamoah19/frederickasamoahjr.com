import BetaReadSignUpDrawer from "@/components/modals/BetaReadSignUpDrawer";
import HeadComponent from "@/components/HeadComponent";
import Header from "@/components/Header";
import { merriweather } from "@/fonts/merriweather";
import { Box, Button, Flex, Icon, Text, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { GiFireSilhouette } from "react-icons/gi";

/**
 * This page displays the Prologue of The Pivot
 * 
 * @returns ProloguePage component
 */
export default function ProloguePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <BetaReadSignUpDrawer isOpen={isOpen} onClose={onClose} />
      <HeadComponent title="The Pivot - Prologue | Frederick Asamoah Jr" />
      <Box as="main" bgColor={"#FBF6E9"}>
        <Header textColor="black" />
        <Flex
          width={"100%"}
          height={"100%"}
          direction={"column"}
          pt={32}
          pb={16}
        >
          {/** Page Title */}
          <Text textStyle={"h2"}> The Pivot - Prologue</Text>
          <Flex width={"100%"} justify={"center"} mb={8}>
            <Icon as={GiFireSilhouette} boxSize={5} />
          </Flex>
          {/** Prologue */}
          <Flex
            width={"100%"}
            justify={"center"}
            align={"start"}
            direction={"column"}
            w={{ base: "90%", sm: "70%", md: "60%" }}
            mx={"auto"}
          >
            <Text textStyle={"prologue"}>
              Daniel was struggling. He was using every ounce of energy he had
              to make it to the woods, make it to cover, but lacked the strength
              to run as fast as he could prior to all the weight he lost.
            </Text>
            <Text textStyle={"prologue"}>
              {"\t"}A spotlight from a helicopter in pursuit revealed Daniel in
              the dark of the night. He kept running, ignoring his shortness of
              breath and flaming chest and cuts on his bare feet. Daniel quickly
              gandered to his left and saw soldiers shouting commands as they
              rushed into their jeeps.
            </Text>
            <Text textStyle={"prologue"}>
              {"\t"}Bullets from the chopper rained on Daniel as he swiveled and
              dodged, doing his best to avoid being hit. Growling engines from
              the jeeps grew louder as their blinding headlights illuminated
              their target.
            </Text>
            <Text textStyle={"prologue"}>
              {"\t"}Before they could reach him, Daniel made it to the woods. A
              couple yards in, he caught the sounds of multiple jeeps coming to
              a screeching halt.
            </Text>
            <Text textStyle={"prologue"}>
              {"\t"}Knowing it wouldn&apos;t be long before they closed the gap,
              Daniel tried his hardest to pick up the pace. Unfortunately for
              him, a branch pierced him in his right foot, which caused him to
              stumble. He crawled to his feet and hobbled deeper into the woods.
            </Text>
            <Text textStyle={"prologue"}>
              {"\t"}The hairs on the back of Daniel&apos;s neck stood up
              straight as he could feel the soldiers gaining ground on him. One
              must have spotted him for Daniel heard a rifle unload one-third of
              a clip in his direction. A bullet grazed his arm, but he simply
              applied pressure on the flesh wound and kept going, ignoring the
              large splinter in his foot as he bobbed and weaved through the
              trees and ducked low branches.
            </Text>
            <Text textStyle={"prologue"}>
              {"\t"}After he gained a small amount of distance from his
              pursuers, Daniel spotted a tree with good footholds. He ascended
              the tree and remained dead still.
            </Text>
            <Text textStyle={"prologue"}>
              {"\t"}He overheard footsteps and a voice of a comm radio.
            </Text>
            <Text textStyle={"prologue"}>
              {"\t"}&ldquo;Alpha team, remember, warning shots only. I want him
              brought to me alive.&rdquo; the voice echoed over the comm.
            </Text>
            <Text textStyle={"prologue"}>
              {"\t"}All the soldiers in the group walked right past the tree
              Daniel was in. His muscles relaxed as a sense of relief rested
              upon him. He heard another set of footsteps that stopped right
              underneath him. The soldier bent down, inspected the ground, and
              circled the tree Daniel was located in.
            </Text>
            <Text textStyle={"prologue"}>
              {"\t"}The soldier pointed his gun up and began to shoot.
              Frightened he might get hit again, Daniel shifted his weight and
              leaned away from the bullets. His new position caused him to lose
              his balance and fall out of the tree. Daniel landed flat on his
              back after hitting his head on a stray branch on his way down.
            </Text>
            <Text textStyle={"prologue"}>
              {"\t"}&ldquo;I got him. Alpha team, Bravo team, regroup on
              me.&rdquo; the soldier radioed.
            </Text>
            <Text textStyle={"prologue"}>
              {"\t"}&ldquo;Put the tracker on him.&rdquo; the voice replied.
            </Text>
            <Text textStyle={"prologue"}>
              {"\t"}Dazed from damage to his head, Daniel took one look at the
              full moon above him and closed his eyes. Within seconds, he heard
              a small projectile fire from some form of a weapon and immediately
              felt a stinging sensation on the left side of his neck. He was in
              so much pain he could hardly lift his arm to check what it was,
              but assumed it was the tracker he overheard the man request.
            </Text>
            <Text textStyle={"prologue"}>
              {"\t"}&ldquo;Please God, take me somewhere, anywhere but
              here.&rdquo; Daniel said internally.
            </Text>
            <Text textStyle={"prologue"}>
              {"\t"}The other soldiers rejoined the one soldier who caught
              Daniel. Daniel overheard their chatter, but tuned them out. He
              felt the barrel from a rifle pressed flush against his forehead.
            </Text>
            <Text textStyle={"prologue"}>
              {"\t"}&ldquo;Move and I&apos;ll blow freakin&apos; your head
              off.&rdquo; one of the soldiers said.
            </Text>
            <Text textStyle={"prologue"}>
              {"\t"}&ldquo;Trust me. I&apos;m not going anywhere.&rdquo; Daniel
              responded.
            </Text>
            <Text textStyle={"prologue"}>
              {"\t"}&ldquo;You&apos;ve caused enough tr--&rdquo;
            </Text>
            <Text textStyle={"prologue"}>
              {"\t"}Daniel awaited the soldier to finish his insult, but heard
              nothing. The barrel planted tightly against his head was gone. His
              face and arms felt an intense heat, his back felt a dry ground
              that replaced a muddy bed.
            </Text>
            <Text textStyle={"prologue"}>
              {"\t"}He opened his eyes and saw a desolate land covered in
              light-charcoal colored sand, blown by a distant wind.
              Daniel&apos;s jaw plummeted as he gazed into the sky. No longer
              did he see a moon, but three large planets in the distance.
            </Text>
          </Flex>
          <Flex width={"100%"} justify={"center"} my={8}>
            <Icon as={GiFireSilhouette} boxSize={5} />
          </Flex>
          {/** Sign Up To Beta Read Button */}
          <Flex width={"100%"} justify={"center"}>
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
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
