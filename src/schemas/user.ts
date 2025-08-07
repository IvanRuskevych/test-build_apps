import { z } from 'zod'

export const UserSchema = z.object({
  gender: z.string(),
  name: z.object({
    first: z.string(),
    last: z.string(),
  }),
  email: z.email(),
  login: z.object({
    uuid: z.uuid(),
  }),
  nat: z.string(),
})

export const ApiResponseSchema = z.object({
  results: z.array(UserSchema),
  info: z.object({
    seed: z.string(),
    results: z.number(),
    page: z.number(),
  }),
})

export type User = z.infer<typeof UserSchema>
export type ApiResponse = z.infer<typeof ApiResponseSchema>