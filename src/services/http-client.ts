import { HttpRequest, HttpResponse } from '../data/protocols/http/http-client'
import { axiosHttpClient } from './axios-http-client'

const request = async (data: HttpRequest): Promise<HttpResponse> => {
  return axiosHttpClient(data)
}

const httpClient = {
  request
}

export default httpClient
