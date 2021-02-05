import * as React from 'react'
import { SimpleGrid, Heading, VStack } from '@chakra-ui/react'

import Card from 'components/Card'

const ArticleGrid = ({ articles, heading, columns }) => {
  return (
    <VStack mb={[18, 12]} pl={[0, 9]} align='flex-start'>
      <Heading fontSize='xl' pl={[2, 5]} mb='2'>
        {heading}
      </Heading>
      <SimpleGrid columns={[2, 3]} spacing={[0, 2]}>
        {articles.map((article) => (
          <Card
            key={article.title}
            imageUrl={article.image.small}
            title={article.title}
            publishedAt={article.isoDate}
            contentSnippet={article.contentSnippet}
            link={article.link}
          />
        ))}
      </SimpleGrid>
    </VStack>
  )
}

export default ArticleGrid
