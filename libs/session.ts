"server-only"
"use server"

import { EXPIRATION_TIME_IN_SECONDS } from "@/utils/constants"
import { type JWTPayload, jwtVerify, SignJWT } from "jose"
import { cookies as nextCookies } from "next/headers"
import { cache } from "react"

// Generated secret with `openssl rand -hex 32`
const secret = new TextEncoder().encode(process.env.AUTH_SECRET)

export async function decrypt(input: string): Promise<JWTPayload> {
  const result = await jwtVerify(input, secret, {
    algorithms: ["HS256"],
  })
  return result.payload
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
