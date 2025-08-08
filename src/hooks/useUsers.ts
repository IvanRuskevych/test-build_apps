import { useCallback, useEffect, useState } from 'react'
import type { User } from '~/schemas'
import { userService } from '~/services'

interface UseUsersParams {
  page: number
  results: number
  gender?: string
  nat?: string
}

export const useUsers = ({ page, results, gender, nat }: UseUsersParams) => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)
  
  const loadUsers = useCallback(async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await userService.getUsers(page, results, gender, nat)
        setUsers(data)
      } catch (err) {
        console.error(err)
        setError('Failed to fetch users.')
        setUsers([])
      } finally {
        setLoading(false)
      }
    },
    [page, results, gender, nat],
  )
  
  useEffect(() => {
    (async () => await loadUsers())()
  }, [loadUsers])
  
  return { users, loading, error }
}