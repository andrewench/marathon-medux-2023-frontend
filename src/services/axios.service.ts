import axios, { AxiosError } from 'axios'

export const AxiosService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_PROXY_HOST,
  withCredentials: true,
})

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
      const refresh = await AxiosService.post('/auth/refresh')

      if (refresh && refresh.data) {
        return AxiosService(error.response.config)
      }
    } else {
      return Promise.reject(error)
    }
  },
)
