import axios, { AxiosError } from 'axios'

const config = {
  baseURL: process.env.API_PROXY_HOST,
  withCredentials: true,
}

export const AxiosService = axios.create(config)

AxiosService.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json'

  return config
})

AxiosService.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    if (
      error.response?.status === 401 &&
      error.response.statusText === 'Unauthorized'
    ) {
      const requestUrl = error.request.responseURL

      const refresh = await AxiosService.post('/auth/refresh')

      if (refresh && refresh.data) {
        return AxiosService({
          ...config,
          baseURL: requestUrl,
        })
      }
    } else {
      return Promise.reject(error)
    }
  },
)
