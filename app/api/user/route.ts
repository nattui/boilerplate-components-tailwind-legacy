import { getUser } from "@/libs/session"

export async function GET() {
  const user = await getUser()
  return Response.json({ user })
}
