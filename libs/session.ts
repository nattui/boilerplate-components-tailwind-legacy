"server-only"
"use server"

import type { User } from "@/libs/db/schema"
import { EXPIRATION_TIME_IN_SECONDS } from "@/utils/constants"
import { type JWTPayload, jwtVerify, SignJWT } from "jose"
import { cookies as nextCookies } from "next/headers"
import { cache } from "react"

// Generated secret with `openssl rand -hex 32`
const secret = new TextEncoder().encode(process.env.AUTH_SECRET)

type UserPayload = Pick<User, "email" | "id" | "name" | "username">

export async function decrypt(input: string): Promise<UserPayload> {
  const result = await jwtVerify(input, secret, {
    algorithms: ["HS256"],
  })
  return result.payload as UserPayload
}

export async function encrypt(payload: JWTPayload): Promise<string> {
  const jwt = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${EXPIRATION_TIME_IN_SECONDS}s`)
    .sign(secret)
  return jwt
}

// Checks cookie session token to see if valid
async function getUncachedSession(): Promise<JWTPayload | undefined> {
  let cookies
  try {
    cookies = await nextCookies()
  } catch (error) {
    console.error(error)
  }
  if (!cookies) return

  const cookieList = cookies.getAll()
  const session = cookieList.find((cookie) => cookie.name === "session")?.value
  if (!session) return

  try {
    const payload = await decrypt(session)
    return payload
  } catch (error) {
    console.error(error)
    return
  }
}

export const getSession = cache(getUncachedSession)

export async function getIsAuthenticated(): Promise<boolean> {
  try {
    const session = await getSession()
    return Boolean(session)
  } catch (error) {
    console.error(error)
    return false
  }
}

export async function getUncachedUser(): Promise<undefined | UserPayload> {
  const cookies = await nextCookies()
  const session = cookies.get("session")?.value
  if (!session) return

  try {
    const user = await decrypt(session)
    return {
      email: user.email,
      id: user.id,
      name: user.name,
      username: user.username,
    }
  } catch (error) {
    console.error(error)
    return
  }
}

export const getUser = cache(getUncachedUser)
