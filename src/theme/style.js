import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#F6F6F6', '#0d0d0d')(props),
      color: mode('#262626', '#f2f2f2')(props),
    },
  }),
}

export default styles
