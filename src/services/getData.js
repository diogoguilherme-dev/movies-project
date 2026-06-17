import api from './api'

// ==== Busca o filme em destauqe da semana ====
export async function getMovies() {
  const {
    data: { results }
  } = await api.get('/movie/popular')

  return results[0]
}

// ==== Busca os filmes mais bem avaliados ===
export async function getTopMovies() {
  const {
    data: { results }
  } = await api.get('/movie/top_rated')

  return results
}

// ==== Busca as séries mais bem avaliadas ===
export async function getTopSeries() {
  const {
    data: { results }
  } = await api.get('/tv/top_rated')

  return results
}

// ==== Busca os filmes mais populares ===
export async function getPopularSeries() {
  const {
    data: { results }
  } = await api.get('/tv/popular')

  return results
}

// ==== Busca os atores mais bem avaliados ===
export async function getTopPeople() {
  const {
    data: { results }
  } = await api.get('/person/popular')

  return results
}

// ==== Busca o filme pelo ID ====
export async function getMovieVideos(movieId) {
  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/videos`)

  return results
}

export async function getMovieCredits(movieId) {
  const {
    data: { cast }
  } = await api.get(`movie/${movieId}/credits`)

  return cast
}

export async function getMovieSimilar(movieId) {
  const {
    data: { results }
  } = await api.get(`movie/${movieId}/similar`)
  return results
}

export async function getMovieById(movieId) {
  const { data } = await api.get(`movie/${movieId}`)

  return data
}

export async function getNowPlayingMovies(){
  const { 
    data: {results}
   } = await api.get(`movie/now_playing`)

  return results
}
