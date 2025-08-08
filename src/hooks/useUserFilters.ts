import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getFiltersFromParams } from '~/utils'

export const useUserFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  
  const [page, setPage] = useState(1)
  const [gender, setGender] = useState('all')
  const [nationality, setNationality] = useState('all')
  
  useEffect(() => {
    const { page, gender, nationality } = getFiltersFromParams(searchParams)
    
    setPage(page)
    setGender(gender)
    setNationality(nationality)
  }, [searchParams])
  
  useEffect(() => {
    setSearchParams({
      page: page.toString(),
      gender,
      nat: nationality,
    })
  }, [page, gender, nationality, setSearchParams])
  
  return {
    page,
    gender,
    nationality,
    setPage,
    setGender,
    setNationality,
  }
}
