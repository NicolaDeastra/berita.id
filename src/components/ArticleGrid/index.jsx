import * as React from 'react'
import { SimpleGrid, Heading, VStack } from '@chakra-ui/react'

import Card from 'components/Card'

const ArticleGrid = ({ articles, heading, columns }) => {
  return (
    <VStack mb='12' pl='9' align='flex-start'>
      <Heading fontSize='xl' pl='5' mb='2'>
        {heading}
      </Heading>
      <SimpleGrid columns={columns} spacing={2}>
        {articles.map((article) => (
          <Card
            key={article.title}
            imageUrl={article.image.small}
            title={article.title}
            publishedAt={article.isoDate}
          />
        ))}
      </SimpleGrid>
    </VStack>
  )
}

export default ArticleGrid
