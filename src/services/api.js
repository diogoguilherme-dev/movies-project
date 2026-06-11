import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'f59b81f2306d17e600c86a206e0f82d7',
    language: 'pt-BR',
    page: 1
  }
})

export default api