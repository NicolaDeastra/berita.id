import * as React from 'react'
import { SimpleGrid } from '@chakra-ui/react'

import newsApi from 'services'
import Card from 'components/Card'

const LatestArticle = () => {
  const [articles, setArticles] = React.useState([])

  React.useEffect(() => {
    async function fetch() {
      try {
        const res = await newsApi.getTopHeadlines()

        setArticles(res.data.articles)
      } catch (error) {
        return error
      }
    }

    fetch()
  }, [])

  return (
    <SimpleGrid columns={3} spacing={2}>
      {articles
        ? articles.map((article) => (
            <Card
              key={article.title}
              imageUrl={article.urlToImage}
              title={article.title}
              author={article.source.name}
              publishedAt={article.publishedAt}
            />
          ))
        : null}
    </SimpleGrid>
  )
}

export default LatestArticle
