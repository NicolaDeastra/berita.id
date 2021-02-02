import { mode } from '@chakra-ui/theme-tools'

const Link = {
  variants: {
    link: (props) => ({
      color: mode('#8d5784', '#F2ED80')(props),
    }),
  },
}

export default Link
