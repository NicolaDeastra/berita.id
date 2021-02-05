import * as React from 'react'
import moment from 'moment'

import { Box, Image, Text, Flex, Badge, Link } from '@chakra-ui/react'

const Card = ({ imageUrl, title, publishedAt, contentSnippet, link }) => {
  return (
    <Box p={[2, 5]} mb={[4, 0]} maxW='300px' maxH='500px'>
      <Image
        borderRadius='md'
        minH='155px'
        maxH='155px'
        mb={4}
        src={imageUrl}
        alt={title}
      />
      <Flex align='baseline' mt={2}>
        <Badge size={6}>
          {moment(publishedAt).local().format('YYYY-MM-DD HH:mm')}
        </Badge>
      </Flex>
      <Link href={link} isExternal>
        <Text
          mt={2}
          fontSize={['sm', 'md']}
          minH='90px'
          fontWeight='semibold'
          lineHeight='short'
        >
          {title}
        </Text>
      </Link>
      <Text fontSize={['xs', 'sm']}>{contentSnippet}</Text>
    </Box>
  )
}

export default Card
