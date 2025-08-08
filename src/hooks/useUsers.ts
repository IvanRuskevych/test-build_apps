import { useCallback, useEffect, useState } from 'react'
import type { User } from '~/schemas'
import { userService } from '~/services'

interface UseUsersParams {
  page: number
  rowsPerPage: number
  gender?: string
  nat?: string
}

export const useUsers = ({ page, rowsPerPage, gender, nat }: UseUsersParams) => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)
  
  const loadUsers = useCallback(async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await userService.getUsers(page, rowsPerPage, gender, nat)
        setUsers(data)
      } catch (err) {
        console.error(err)
        setError('Failed to fetch users.')
        setUsers([])
      } finally {
        setLoading(false)
      }
    },
    [page, rowsPerPage, gender, nat],
  )
  
  useEffect(() => {
    (async () => await loadUsers())()
  }, [loadUsers])
  
  return { users, loading, error }
}