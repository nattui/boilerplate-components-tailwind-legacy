"use server"

import { MESSAGE } from "@/utils/constants"
import { ROUTE } from "@/utils/constants"
import { cookies as nextCookies } from "next/headers"
import { redirect } from "next/navigation"

export async function signOut() {
  try {
    const cookies = await nextCookies()
    cookies.delete("session")
    redirect(ROUTE.BUTTONS)
  } catch {
    return { message: MESSAGE.AUTH.SIGNOUT.FAILED }
  }
}
