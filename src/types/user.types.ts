import type { User } from '~/schemas'

export interface UserProps {user: User}

export interface UsersListProps {users: User[]}

export interface UserTableProps extends UsersListProps {
  loading: boolean
  rowsPerPage: number
}