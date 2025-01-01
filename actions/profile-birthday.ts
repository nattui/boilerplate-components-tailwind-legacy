"use server"

import { db } from "@/libs/db"
import { userProfileTable } from "@/libs/db/schema"
import { getUser } from "@/libs/session"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"

export async function profileBirthday(_: unknown, formData: FormData) {
  const user = await getUser()
  if (!user) return

  const birthday = formData.get("birthday") as string

  const [profile] = await db
    .select()
    .from(userProfileTable)
    .where(eq(userProfileTable.userId, user.id))

  await (profile
    ? db
        .update(userProfileTable)
        .set({ birthday: birthday.split("T")[0] })
        .where(eq(userProfileTable.id, profile.id))
    : db.insert(userProfileTable).values({
        birthday: birthday.split("T")[0],
        userId: user.id,
      }))

  revalidatePath("/", "layout")

  return { message: "Birthday updated" }
}
