import { extendTheme } from '@chakra-ui/react'

import Link from './components/Link'
import styles from './style'

const overrides = {
  components: {
    Link,
  },
  fonts: {
    heading: 'PT Sans',
    body: 'Raleway',
  },
  fontSizes: {
    xs: '14px',
    sm: '16px',
    md: '18px',
    lg: '20px',
    xl: '24px',
    '2xl': '28px',
    '3xl': '36px',
    '4xl': '48px',
    '5xl': '64px',
    '6xl': '72px',
  },
  sizes: {
    '4xs': '12rem',
    '5xs': '10rem',
    '6xs': '8rem',
    '7xs': '6rem',
    '8xs': '4rem',
  },
  styles,
}

export default extendTheme(overrides)
