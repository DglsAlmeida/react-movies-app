import { HttpResponse } from '../data/protocols/http/http-client'
import api from './api'

export const getMovies = async (): Promise<HttpResponse> => {
  const response = await api.get(`s=Dragon&type=movie`)

  return response.body.Search
}
