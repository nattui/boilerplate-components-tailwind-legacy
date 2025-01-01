import { db } from "@/libs/db"
import {
  authCredentialsTable,
  authProvidersTable,
  usersTable,
} from "@/libs/db/schema"
import { encrypt } from "@/libs/session"
import { signInSchema } from "@/libs/validation/sign.schema"
import { EXPIRATION_TIME_IN_SECONDS, MESSAGE } from "@/utils/constants"
import { isDevelopment } from "@/utils/is-development"
import { compare } from "bcrypt"
import { and, eq } from "drizzle-orm"
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

  const { email, password } = result.data

  // Get user from database
  const [user] = await db
    .select({
      email: usersTable.email,
      hashPassword: authCredentialsTable.hashPassword,
      id: usersTable.id,
      name: usersTable.name,
      username: usersTable.username,
    })
    .from(usersTable)
    .innerJoin(authProvidersTable, eq(authProvidersTable.userId, usersTable.id))
    .innerJoin(
      authCredentialsTable,
      eq(authCredentialsTable.providerId, authProvidersTable.id),
    )
    .where(
      and(
        eq(usersTable.email, email),
        eq(authProvidersTable.provider, "credentials"),
      ),
    )

  if (!user) {
    return Response.json(
      { message: MESSAGE.AUTH.SIGNIN.INVALID_CREDENTIALS },
      { status: 400 },
    )
  }

  // Check if password is correct
  const isPasswordCorrect = await compare(password, user.hashPassword)
  if (!isPasswordCorrect) {
    return Response.json(
      { message: MESSAGE.AUTH.SIGNIN.INVALID_CREDENTIALS },
      { status: 400 },
    )
  }

  // Create session token
  const token = await encrypt({
    email: user.email,
    id: user.id,
    name: user.name,
    username: user.username,
  })

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
