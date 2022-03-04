import { Movie, MoviesActionTypes } from './movies-types'

export const requestMovies = () => ({
  type: MoviesActionTypes.REQUEST_MOVIES
})

export const successMovies = (movieData: Movie[]) => ({
  type: MoviesActionTypes.SUCCESS_MOVIES,
  payload: movieData
})

export const failureMovies = () => ({
  type: MoviesActionTypes.FAILURE_MOVIES
})
