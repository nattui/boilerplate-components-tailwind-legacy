import { db } from "@/libs/db"
import { userProfileTable, usersTable } from "@/libs/db/schema"
import { getUser } from "@/libs/session"
import { eq } from "drizzle-orm"

export async function GET() {
  const user = await getUser()
  if (!user) return

  const [profile] = await db
    .select({
      birthday: userProfileTable.birthday,
      country: userProfileTable.country,
    })
    .from(usersTable)
    .innerJoin(userProfileTable, eq(userProfileTable.userId, usersTable.id))
    .where(eq(usersTable.id, user.id))

  return Response.json({ profile })
}
