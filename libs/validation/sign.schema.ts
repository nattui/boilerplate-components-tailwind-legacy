import { z } from "zod"

export const signInSchema = z.object({
  email: z.string().email("Invalid email format."),
  password: z.string().min(8, "Password must be at least 8 characters."),
})

export type SignInSchema = z.infer<typeof signInSchema>
