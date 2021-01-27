import axios from 'axios'

const baseUrl = 'https://my-json-server.typicode.com/jubs16/Products/Products'

const getProducts = async () => {
  try {
      // fetch data from a url endpoint
      const response = await axios.get(baseUrl)
      return response.data
    } catch (error) {
      throw error.response
    }
  }

export  {
  getProducts, 
}