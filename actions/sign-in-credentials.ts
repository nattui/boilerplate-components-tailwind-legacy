"use server"

// import { compare } from "bcrypt"
import { and, eq } from "drizzle-orm"
import { cookies as nextCookies } from "next/headers"
import { redirect } from "next/navigation"
import { db } from "@/libs/db"
import {
  authCredentialsTable,
  authProvidersTable,
  usersTable,
} from "@/libs/db/schema"
import { encrypt } from "@/libs/session"
import { signInSchema } from "@/libs/validation/sign.schema"
import { EXPIRATION_TIME_IN_SECONDS, MESSAGE, ROUTE } from "@/utils/constants"
import { isDevelopment } from "@/utils/is-development"

export async function signInCredentials(_: unknown, formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  // Validate form data
  const result = signInSchema.safeParse({ email, password })
  if (!result.success) {
    const error = result.error.flatten().fieldErrors
    return { message: error.email?.[0] || error.password?.[0] }
  }

  try {
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
      .innerJoin(
        authProvidersTable,
        eq(authProvidersTable.userId, usersTable.id),
      )
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
      return { message: MESSAGE.AUTH.SIGNIN.INVALID_CREDENTIALS }
    }

    // Check if password is correct
    const isPasswordCorrect = true // TODO: Remove this
    if (!isPasswordCorrect) {
      return { message: MESSAGE.AUTH.SIGNIN.INVALID_CREDENTIALS }
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
  } catch {
    return { message: MESSAGE.GENERIC.ERROR }
  }

  redirect(ROUTE.LIFE_EXPECTANCY)
}
