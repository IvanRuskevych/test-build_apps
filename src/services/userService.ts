import { toast } from 'react-toastify'
import { ApiResponseSchema, type User } from '~/schemas'
import { HttpService } from '~/services/httpService.ts'

const httpService = new HttpService()
// const SEED = 'abc'
export const userService = {
  getUsers: async (
    page: number,
    rowsPerPage: number = 10,
    gender?: string,
    nat?: string,
  ): Promise<User[]> => {
    const params: Record<string, string | number> = {
      page,
      results: rowsPerPage,
      // seed: SEED, // Required for stable pagination with randomuser.me API,
      // but using "seed" breaks filtering by the "gender" parameter.
      
    }
    
    if (gender && gender !== 'all') params.gender = gender
    if (nat && nat !== 'all') params.nat = nat
    
    const response = await httpService.get('', { params })
    
    const parsed = ApiResponseSchema.safeParse(response.data)
    
    if (!parsed.success) {
      toast.error('Invalid API response from RandomUser API')
      return []
    }
    
    return parsed.data?.results
  },
}