import { takeLatest } from 'redux-saga/effects'
import { loadMovies } from './modules/movies/movies-saga'
import { MoviesActionTypes } from './modules/movies/movies-types'

export default function* root() {
  yield takeLatest(MoviesActionTypes.REQUEST_MOVIES, loadMovies)
}
