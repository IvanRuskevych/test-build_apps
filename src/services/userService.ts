import { ApiResponseSchema, type User } from '~/schemas'
import { HttpService } from '~/services/httpService.ts'

const httpService = new HttpService()

export const userService = {
  getUsers: async (
    page: number,
    gender?: string,
    nat?: string,
  ): Promise<User[]> => {
    const params: Record<string, string | number> = {
      page,
      results: 10,
    }
    
    if (gender && gender !== 'all') params.gender = gender
    if (nat && nat !== 'all') params.nat = nat
    
    const response = await httpService.get('', { params })
    
    const parsed = ApiResponseSchema.safeParse(response.data)
    
    if (!parsed.success) {
      console.error('Invalid API response:', parsed.error.issues)
      throw new Error('Invalid API response')
    }
    
    return parsed.data?.results
  },
}