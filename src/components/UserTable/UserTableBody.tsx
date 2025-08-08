import { memo } from 'react'
import { UserRow } from '~/components/UserTable/UserRow.tsx'
import type { User } from '~/schemas'

export const UserTableBody = memo(({ users }: { users: User[] }) => (
  <>
    {users.map((user) => (
      <UserRow key={user.login.uuid}
               user={user} />
    ))}
  </>
))