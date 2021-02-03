import * as React from 'react'

import newsApi from 'services'

import Hero from 'components/Hero'
import ArticleGrid from 'components/ArticleGrid'

const Home = () => {
  // const [headline, setHeadline] = React.useState([])
  const [state, setState] = React.useState({ headlines: [], latest: [] })

  React.useEffect(() => {
    async function fetch() {
      try {
        const headlines = await newsApi.getTopHeadlines()
        const latest = await newsApi.getLatestArticle()

        setState({
          headlines: headlines.data.articles,
          latest: latest.data.articles,
        })
      } catch (error) {
        return error
      }
    }

    fetch()
  }, [])

  return (
    <>
      <Hero />
      <ArticleGrid
        articles={state.headlines}
        columns={3}
        heading='Hotline article'
      />
      <ArticleGrid
        articles={state.latest}
        columns={3}
        heading='Latest article'
      />
    </>
  )
}

export default Home
