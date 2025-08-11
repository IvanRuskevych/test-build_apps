import axios from 'axios'
import { toast } from 'react-toastify'
import { getErrorMessageByStatus } from './httpError'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const apiError = error.response?.data?.error
    const status = error.response?.status
    
    let message = 'Unexpected error occurred.'
    
    if (apiError) {
      message = apiError
    } else {
      message = getErrorMessageByStatus(status)
    }
    
    toast.error(message)
    return Promise.reject(error)
  },
)
