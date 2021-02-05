import * as React from 'react'
import moment from 'moment'

import { Box, Image, Text } from '@chakra-ui/react'

const Card = ({ imageUrl, title, publishedAt, author }) => {
  return (
    <Box p='5' mb='10' maxW='300px' maxH='345px'>
      <Image
        borderRadius='md'
        minH='155px'
        maxH='155px'
        mb={4}
        src={imageUrl}
        alt={title}
      />

      <Text
        mt={2}
        fontSize='md'
        minH='80px'
        fontWeight='semibold'
        lineHeight='short'
      >
        {title}
      </Text>
      <Text mt={2}>
        {moment(publishedAt).local().format('YYYY-MM-DD HH:mm')}
      </Text>
    </Box>
  )
}

export default Card
