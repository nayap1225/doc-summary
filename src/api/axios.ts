import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  }
})

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    // 요청 전 처리 로직 (예: 토큰 추가)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // 공통 에러 처리 로직
    console.error('API Error:', error)
    return Promise.reject(error)
  }
)

export default api
