import { merriweather } from "@/fonts/merriweather";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `${merriweather.style.fontFamily}, serif`,
    heading: `${merriweather.style.fontFamily}, serif`,
  },
  colors: {
    black: {
      50: '#f2f2f2',
      100: '#d9d9d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#000000',
    }
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
      fontSize: { base: 'xl', md: '4xl' }, // 40px
      fontWeight: 'bold', // 700
      mb: 8
    },
    h2Caption: {
      fontStyle: 'italic',
      fontSize: { base: 'sm', md: 'lg' }, // 18px
      fontWeight: 'semibold'
    },
    paragraph: {
      fontSize: { base: 'md', md: 'lg' }, // 18px
      textAlign: 'justify'
    },
    prologue: {
      fontSize: "md",
      lineHeight: '7',
      mb: 1,
      whiteSpace: 'break-spaces'
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
    },
    headerLinks: {
      fontSize: 'md'
    }
  },
})

export default theme;