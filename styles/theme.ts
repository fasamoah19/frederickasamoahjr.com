import { suranna } from '@/fonts/suranna'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `${suranna.style.fontFamily}, sans-serif`,
    body: `${suranna.style.fontFamily}, sans-serif`,
  },
})

export default theme