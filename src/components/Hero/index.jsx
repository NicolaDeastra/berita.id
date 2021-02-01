import * as React from 'react'

import newsApi from 'services'

const Hero = () => {
  React.useEffect(() => {
    async function fetch() {
      try {
        const res = await newsApi.getTopHeadlines()

        console.log(res)
      } catch (error) {
        return error
      }
    }

    fetch()
  }, [])

  return <p>Hello</p>
}

export default Hero
