import { db } from "@/libs/db"
import { userProfileTable } from "@/libs/db/schema"
import { getUser } from "@/libs/session"
import { eq } from "drizzle-orm"

export async function POST(request: Request) {
  const body = await request.json()

  const { country } = body

  const user = await getUser()
  if (!user) return

  const [profile] = await db
    .select()
    .from(userProfileTable)
    .where(eq(userProfileTable.userId, user.id))

  await (profile
    ? db
        .update(userProfileTable)
        .set({ country })
        .where(eq(userProfileTable.id, profile.id))
    : db.insert(userProfileTable).values({
        country,
        userId: user.id,
      }))

  return Response.json({ message: "Country updated" })
}
