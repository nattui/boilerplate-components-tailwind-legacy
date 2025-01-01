"use server"

import { db } from "@/libs/db"
import { userProfileTable } from "@/libs/db/schema"
import { getUser } from "@/libs/session"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"

export async function profileCountry(_: unknown, formData: FormData) {
  const user = await getUser()
  if (!user) return

  const country = formData.get("country") as string

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

  revalidatePath("/", "layout")

  return { message: "Country updated" }
}
