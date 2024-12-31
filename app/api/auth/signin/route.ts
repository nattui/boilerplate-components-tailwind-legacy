import { db } from "@/libs/db"
import { usersTable } from "@/libs/db/schema"
import { encrypt } from "@/libs/session"
import { signInSchema } from "@/libs/validation/sign.schema"
import { EXPIRATION_TIME_IN_SECONDS, MESSAGE } from "@/utils/constants"
import { isDevelopment } from "@/utils/is-development"
import { eq } from "drizzle-orm"
import { cookies as nextCookies } from "next/headers"

export async function POST(request: Request) {
  const body = await request.json()

  // Validate request body
  const result = signInSchema.safeParse(body)
  if (!result.success) {
    const error = result.error.flatten().fieldErrors
    return Response.json(
      { message: error.email?.[0] || error.password?.[0] },
      { status: 400 },
    )
  }

  // Get user from database
  const { email, password } = result.data

  const [user] = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email))

  if (!user) {
    return Response.json(
      { message: MESSAGE.AUTH.SIGNIN.INVALID_CREDENTIALS },
      { status: 400 },
    )
  }

  // Create session token
  const token = await encrypt({ email, password })

  // Set session token in cookies
  const cookies = await nextCookies()
  cookies.set({
    httpOnly: true,
    maxAge: EXPIRATION_TIME_IN_SECONDS,
    name: "session",
    path: "/",
    priority: "medium",
    sameSite: "lax",
    secure: !isDevelopment,
    value: token,
  })

  return Response.json({ message: MESSAGE.AUTH.SIGNIN.SUCCESS })
}
