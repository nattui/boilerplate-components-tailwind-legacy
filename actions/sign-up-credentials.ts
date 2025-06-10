"use server"

// import { hash } from "bcrypt"
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

export async function signUpCredentials(_: unknown, formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  // Validate form data
  const result = signInSchema.safeParse({ email, password })
  if (!result.success) {
    const error = result.error.flatten().fieldErrors
    return { message: error.email?.[0] || error.password?.[0] }
  }

  // Get user from database
  try {
    const [existingUser] = await db
      .select({
        email: usersTable.email,
        hashPassword: authCredentialsTable.hashPassword,
        id: usersTable.id,
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

    if (existingUser) {
      return { message: MESSAGE.AUTH.SIGNUP.EMAIL_ALREADY_EXISTS }
    }

    const hashedPassword = "meow" // TODO: Remove this

    // TODO: Transaction
    // Create user
    const [user] = await db
      .insert(usersTable)
      .values({
        email,
        name:
          email.split("@")[0].charAt(0).toUpperCase() +
          email.split("@")[0].slice(1) +
          " " +
          email.split("@")[0].charAt(0).toUpperCase() +
          email.split("@")[0].slice(1),
        username: email.split("@")[0],
      })
      .returning({
        email: usersTable.email,
        id: usersTable.id,
        name: usersTable.name,
        username: usersTable.username,
      })

    const [provider] = await db
      .insert(authProvidersTable)
      .values({
        provider: "credentials",
        userId: user.id,
      })
      .returning({ id: authProvidersTable.id })

    await db.insert(authCredentialsTable).values({
      hashPassword: hashedPassword,
      providerId: provider.id,
    })

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
