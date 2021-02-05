import * as React from 'react'

import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

import newsApi from 'services'
import ArticleGrid from 'components/ArticleGrid'

const LatestArticle = () => {
  const [state, setState] = React.useState({ headlines: [], loading: true })

  React.useEffect(() => {
    async function fetch() {
      try {
        const articles = await newsApi.getTopHeadlines()
        const newArticles = articles.data.data.slice(0, 6)

        setState({
          headlines: newArticles,
          loading: false,
        })
      } catch (error) {
        return error
      }
    }

    fetch()
  }, [])

  return (
    <>
      {state.loading ? (
        <Box padding='14' boxShadow='lg'>
          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={4} spacing='4' />
        </Box>
      ) : (
        <ArticleGrid
          articles={state.headlines}
          columns={3}
          heading='Hotline article'
        />
      )}
    </>
  )
}

export default LatestArticle
