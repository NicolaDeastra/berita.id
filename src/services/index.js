import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_URL

class newsApi {
  static getTopHeadlines = async () => {
    try {
      const res = await axios.get(`${baseUrl}`)

      return await res
    } catch (error) {
      return error
    }
  }

  static getTechArticle = async () => {
    try {
      const res = await axios.get(`${baseUrl}/tech`)

      return res
    } catch (error) {
      return error
    }
  }
}

export default newsApi
