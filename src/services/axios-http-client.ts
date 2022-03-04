import axios, { AxiosResponse } from 'axios'
import {
  HttpRequest,
  HttpResponse,
  HttpStatusCode
} from '../data/protocols/http/http-client'

export const axiosHttpClient = async (
  data: HttpRequest
): Promise<HttpResponse> => {
  try {
    const response: AxiosResponse = await axios.request({
      url: data.url,
      method: data.method,
      data: data.body,
      headers: data.headers,
      params: data.params
    })

    return {
      statusCode: response.status,
      body: response.data
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)

      return {
        statusCode: HttpStatusCode.notFound,
        body: null
      }
    } else {
      return {
        statusCode: HttpStatusCode.notFound,
        body: null
      }
    }
  }
}
