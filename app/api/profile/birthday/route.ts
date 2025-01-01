import { db } from "@/libs/db"
import { userProfileTable } from "@/libs/db/schema"
import { getUser } from "@/libs/session"
import { eq } from "drizzle-orm"

export async function POST(request: Request) {
  const body = await request.json()

  const { birthday } = body

  const user = await getUser()
  if (!user) return

  await db
    .update(userProfileTable)
    .set({ birthday })
    .where(eq(userProfileTable.userId, user.id))

  return Response.json({ message: "Birthday updated" })
}
