import constants from '../constants/constants'
import { GET, HttpResponse, POST } from '../data/protocols/http/http-client'
import httpClient from './http-client'

const { BASE_URL } = constants.URL.HOST

const get = async (url: string, params?: any): Promise<HttpResponse> => {
  return httpClient.request({
    url: `${BASE_URL}${url}`,
    method: GET,
    params
  })
}

const post = async (
  url: string,
  params?: any,
  body?: any
): Promise<HttpResponse> => {
  return httpClient.request({
    url: `${BASE_URL}${url}`,
    method: POST,
    params,
    body
  })
}

const api = {
  get,
  post
}

export default api
