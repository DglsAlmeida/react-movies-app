export type Movie = {
  id: string
  title: string
  year: string
  img: string
}

export type MoviesState = {
  movies: Movie[]
  error: boolean
  loading: boolean
}

export enum MoviesActionTypes {
  REQUEST_MOVIES = '@movies/REQUEST_MOVIES',
  SUCCESS_MOVIES = '@movies/SUCCESS_MOVIES',
  FAILURE_MOVIES = '@movies/FAILURE_MOVIES'
}
