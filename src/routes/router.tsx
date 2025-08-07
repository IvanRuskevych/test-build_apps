import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { ROUTER_KEYS } from '~/shared/const'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTER_KEYS.ROOT}
           element={<p> TEST ROUTER </p>}>
    </Route>,
  ),
)