"use server"

import { db } from "@/libs/db"
import { userProfileTable } from "@/libs/db/schema"
import { getUser } from "@/libs/session"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/dist/server/web/spec-extension/revalidate"

export async function profileDelete() {
  const user = await getUser()
  if (!user) return

  await db.delete(userProfileTable).where(eq(userProfileTable.userId, user.id))

  revalidatePath("/", "layout")

  return { message: "Profile deleted" }
}
