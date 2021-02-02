import * as React from 'react'
import moment from 'moment'

import { Box, Image, Flex, Badge, Text } from '@chakra-ui/react'

const Card = ({ imageUrl, title, publishedAt, author }) => {
  return (
    <Box p='5' maxW='300px' maxH='345px'>
      <Image borderRadius='md' minH='155px' mb={4} src={imageUrl} alt={title} />
      <Flex align='baseline' mt={2}>
        <Badge size={6}>{author}</Badge>
      </Flex>
      <Text mt={2} fontSize='md' fontWeight='semibold' lineHeight='short'>
        {title}
      </Text>
      <Text mt={2}>
        {moment(publishedAt).local().format('YYYY-MM-DD HH:mm')}
      </Text>
    </Box>
  )
}

export default Card