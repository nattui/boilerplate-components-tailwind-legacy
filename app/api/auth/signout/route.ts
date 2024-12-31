import { MESSAGE } from "@/utils/constants"
import { wait } from "@/utils/wait"
import { cookies as nextCookies } from "next/headers"

export async function POST() {
  await wait(1000)

  const cookies = await nextCookies()

  cookies.delete("session")

  return Response.json({ message: MESSAGE.AUTH.SIGNOUT.SUCCESS })
}
