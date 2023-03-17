import { merriweather } from "@/fonts/merriweather";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `${merriweather.style.fontFamily}, serif`,
    heading: `${merriweather.style.fontFamily}, serif`,
  },
  layerStyles: {
    flexImageContainer900H: {
      direction: "column",
      width: "100%",
      bgPos: "center",
      bgRepeat: "no-repeat",
      bgSize: "cover",
      bgAttachment: "fixed",
      minHeight: { base: "fit-content", md: "900px" }
    },
    flexImageContainerFitContent: {
      direction: "column",
      width: "100%",
      bgPos: "center",
      bgRepeat: "no-repeat",
      bgSize: "cover",
      bgAttachment: "fixed",
      color: 'white'
    },
    blackAlphaOverlayPadding32: {
      direction: "column",
      py: 32,
      align: "center",
      pos: "relative",
      justify: 'center',
      w: "100%",
      px: { base: 4, md: 0 },
      minHeight: "inherit",
      h: "inherit"
    }
  },
  textStyles: {
    h1: {
      fontSize: { base: '4xl', md: '7xl' }, // 40px , 72px
      fontWeight: 'bold' // 700
    },
    h2: {
      textAlign: 'center',
      fontSize: {base: 'xl', md: '4xl'}, // 40px
      fontWeight: 'bold' // 700
    },
    h2Caption: {
      fontStyle: 'italic',
      fontSize: {base: 'sm', md: 'lg'}, // 18px
      fontWeight: 'semibold'
    },
    paragraph: {
      fontSize: {base: 'md', md: 'lg'}, // 18px
      textAlign: 'justify'
    },
    // Used for the Header component
    headerText: {
      fontSize: 'lg' // 18px
    },
    excerpt: {
      fontSize: 'lg', // 18px
      fontWeight: 'medium',
      lineHeight: 10,
      textAlign: 'justify'
    }
  },
})

export default theme;