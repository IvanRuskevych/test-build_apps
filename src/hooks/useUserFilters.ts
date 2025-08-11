import { useSearchParams } from 'react-router-dom'

export const useUserFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  
  const page = parseInt(searchParams.get('page') || '0', 10)
  const gender = searchParams.get('gender') || 'all'
  const nationality = searchParams.get('nat') || 'all'
  
  const setPage = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('page', String(newPage))
    setSearchParams(newParams)
  }
  
  const setGender = (newGender: string) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('gender', newGender)
    newParams.set('page', '0')
    setSearchParams(newParams)
  }
  
  const setNationality = (newNat: string) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('nat', newNat)
    newParams.set('page', '0')
    setSearchParams(newParams)
  }
  
  return {
    page,
    gender,
    nationality,
    setPage,
    setGender,
    setNationality,
  }
}
