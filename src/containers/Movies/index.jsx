import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import {
  getMovies,
  getNowPlayingMovies,
  getTopMovies
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Background, Container, ContainerButtons, Info, Poster } from './styles'

function Movies() {
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [nowPlayingMovies, setNowPlayingMovies] = useState()
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  useEffect(() => {
    async function getAllData() {
      Promise.all([getMovies(), getTopMovies(), getNowPlayingMovies()])
        .then(([movie, topMovies, nowPlayingMovies]) => {
          setMovie(movie)
          setTopMovies(topMovies)
          setNowPlayingMovies(nowPlayingMovies)
        })
        .catch((error) => console.error(error))
    }
    getAllData()
  }, [])

  return (
    <>
      {movie && (
        <Background $image={getImages(topMovies[0].backdrop_path)}>
          {showModal && (
            <Modal movieId={topMovies[0].id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{topMovies[0].title}</h1>
              <p>{topMovies[0].overview}</p>
              <ContainerButtons>
                <Button
                  red
                  onClick={() => navigate(`/detalhes/${topMovies[0].id}`)}
                >
                  Assista agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista ao Trailler
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img src={getImages(topMovies[0].poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={'Melhor Avaliados'} />}
      {nowPlayingMovies && <Slider info={nowPlayingMovies} title={'Mais assistidos do Momento'}/>}
    </>
  )
}

export default Movies
