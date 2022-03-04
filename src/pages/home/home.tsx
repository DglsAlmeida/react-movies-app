import { MovieCard } from '../../components/movie-card/movie-card'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { requestMovies } from '../../store/modules/movies/movies-actions'
import { useEffect } from 'react'
import { HomeContainer, HomeContent } from './home-styles'

export const Home = () => {
  const dispatch = useDispatch()
  const movies = useSelector((state: RootState) => state.movies.movies)

  useEffect(() => {
    dispatch(requestMovies())
  }, [dispatch])

  return (
    <HomeContainer>
      <HomeContent>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            date={movie.year}
            title={movie.title}
            img={movie.img}
          />
        ))}
      </HomeContent>
    </HomeContainer>
  )
}
