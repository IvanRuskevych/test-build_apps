export const HTTP_ERRORS: Record<number, string> = {
  400: 'Bad request. Please check your input.',
  401: 'Unauthorized. Please log in again.',
  403: 'Forbidden. You do not have permission to perform this action.',
  404: 'Not found. The resource does not exist.',
  408: 'Request timeout. Please try again.',
  429: 'Too many requests. Please slow down.',
  500: 'Internal server error. Please try again later.',
  502: 'Bad gateway. Please try again later.',
  503: 'Service unavailable. Please try again later.',
  504: 'Gateway timeout. Please try again later.',
}

export const getErrorMessageByStatus = (status?: number): string => {
  if (!status) return 'Unexpected error occurred.'
  return HTTP_ERRORS[status] || 'An unknown error occurred.'
}
