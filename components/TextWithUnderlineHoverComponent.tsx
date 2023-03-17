import { merriweather } from "@/fonts/merriweather";
import { Text } from "@chakra-ui/react";

/** Props necessary for this component */
type Props = {
  text: string;
  underlineColor?: string
};

/** A custom Chakra UI Text component that adds the hover and underline effect */
export default function TextWithUnderlineHoverComponent({
  text,
  underlineColor
}: Props) {
  return (
    <Text
      display={"inline-block"}
      position={"relative"}
      _after={{
        content: '""',
        position: "absolute",
        width: "100%",
        transform: "scaleX(0)",
        height: "2px",
        bottom: 0,
        left: 0,
        backgroundColor: `${underlineColor}`,
        transformOrigin: "bottom right",
        transition: "transform 0.25s ease-out",
      }}
      _hover={{
        transform: "scaleX(1)",
        transformOrigin: "bottom left",
        _after: { transform: "scaleX(1)", transformOrigin: "bottom left" },
      }}
      textStyle={'headerLinks'}
    >
      {text}
    </Text>
  );
}
