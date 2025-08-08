export const getFiltersFromParams = (params: URLSearchParams) => ({
  page: parseInt(params.get('page') || '1', 10),
  gender: params.get('gender') || 'all',
  nationality: params.get('nat') || 'all',
})