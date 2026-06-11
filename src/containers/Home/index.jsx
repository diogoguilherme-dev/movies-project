import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import {
  getMovies,
  getPopularSeries,
  getTopMovies,
  getTopPeople,
  getTopSeries
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Background, Info, Poster, Container, ContainerButtons } from './styles'

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [topPeople, setTopPeople] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    /*     async function getAllData() {
      console.time('time')
      setMovie(await getMovies())
      setTopMovies(await getTopMovies())
      setTopSeries(await getTopSeries())
      setPopularSeries(await getPopularSeries())
      setTopPeople(await getTopPeople())
      console.timeEnd('time')
    }

    getAllData() */

    async function getAllData() {
      console.time('time')

      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getTopPeople()
      ])
        .then(([movie, topMovies, TopSeries, PopularSeries, TopPeople]) => {
          setMovie(movie)
          setTopMovies(topMovies)
          setTopSeries(TopSeries)
          setPopularSeries(PopularSeries)
          setTopPeople(TopPeople)
        })
        .catch((error) => console.error(error))

      console.timeEnd('time')
    }

    getAllData()
  }, [])

  return (
    <>
      {movie && (
        <Background $img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button red onClick={() => navigate(`/detalhes/${movie.id}`)}>
                  Assista agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista ao Trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img src={getImages(movie.poster_path)} alt="capa-do-filme" />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
      {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
      {popularSeries && (
        <Slider info={popularSeries} title={'Séries mais Populares'} />
      )}
      {topPeople && (
        <Slider info={topPeople} title={'Artístas mais Populares'} />
      )}
    </>
  )
}

export default Home
