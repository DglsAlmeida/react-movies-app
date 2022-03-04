import { call, put } from 'redux-saga/effects'
import { getMovies } from '../../../services/movies-service'
import { failureMovies, successMovies } from './movies-actions'

type Response = {
  imdbID: string
  Title: string
  Year: string
  Poster: string
}

export function* loadMovies(): Generator<any> {
  try {
    const response: any = yield call(getMovies)

    const filteredInformations = response.map((movie: Response) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      img: movie.Poster
    }))

    yield put(successMovies(filteredInformations))
  } catch (err) {
    yield put(failureMovies())
  }
}
