import { MESSAGE } from "@/utils/constants"
import { cookies as nextCookies } from "next/headers"

export async function POST() {
  const cookies = await nextCookies()

  cookies.delete("session")

  return Response.json({ message: MESSAGE.AUTH.SIGNOUT.SUCCESS })
}
