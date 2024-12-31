import { encrypt } from "@/libs/session"
import { signInSchema } from "@/libs/validation/sign.schema"
import { MESSAGE } from "@/utils/constants"
import { isDevelopment } from "@/utils/is-development"
import { wait } from "@/utils/wait"
import { cookies as nextCookies } from "next/headers"

export async function POST(request: Request) {
  await wait(1000)

  const body = await request.json()

  const result = signInSchema.safeParse(body)
  if (!result.success) {
    const error = result.error.flatten().fieldErrors
    return Response.json(
      { message: error.email?.[0] || error.password?.[0] },
      { status: 400 },
    )
  }
  const { email, password } = result.data

  // Sudo code
  // Mocking successful database authentication check

  const token = await encrypt({ email, password })

  const YEAR_IN_SECONDS = 31_536_000

  const cookies = await nextCookies()
  cookies.set({
    httpOnly: true,
    maxAge: YEAR_IN_SECONDS,
    name: "session",
    path: "/",
    priority: "medium",
    sameSite: "lax",
    secure: !isDevelopment,
    value: token,
  })

  return Response.json({ message: MESSAGE.AUTH.SIGNIN.SUCCESS })
}
