import { useCallback, useEffect, useState } from 'react'
import type { User } from '~/schemas'
import { userService } from '~/services'

export const useUsers = (
  page: number,
  results: number,
  gender?: string,
  nat?: string,
) => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const loadUsers = useCallback(async () => {
      try {
        setLoading(true)
        setError('')
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