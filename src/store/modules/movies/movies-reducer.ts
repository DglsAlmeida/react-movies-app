import { Reducer } from 'redux'
import { MoviesActionTypes, MoviesState } from './movies-types'

const initialState: MoviesState = {
  movies: [],
  error: false,
  loading: false
}

export const moviesReducer: Reducer<MoviesState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case MoviesActionTypes.REQUEST_MOVIES: {
      return { ...state, loading: true }
    }
    case MoviesActionTypes.SUCCESS_MOVIES: {
      return { movies: [...action.payload], loading: false, error: false }
    }
    case MoviesActionTypes.FAILURE_MOVIES: {
      return { movies: [], loading: false, error: false }
    }
    default: {
      return state
    }
  }
}
