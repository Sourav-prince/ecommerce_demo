import axios from 'axios'

const baseUrl = 'https://api.exchangeratesapi.io/latest?base=INR'

const getExchangeRates = async () => {
  try {
      // fetch data from a url endpoint
      const response = await axios.get(baseUrl)
      return response.data
    } catch (error) {
      throw error.response
    }
  }

export  {
  getExchangeRates, 
}