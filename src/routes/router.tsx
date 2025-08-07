import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Layout } from '~/layout/Layout.tsx'
import { HomePage, UsersPage } from '~/pages'
import { ROUTER_KEYS } from '~/shared/const'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTER_KEYS.ROOT}
           element={<Layout />}>
      <Route index
             element={<HomePage />} />
      <Route path={ROUTER_KEYS.USER_DASH}
             element={<UsersPage />} />
    </Route>,
  ),
)