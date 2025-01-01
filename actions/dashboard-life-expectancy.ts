"use server"

import { db } from "@/libs/db"
import { lifeExpectancyTable } from "@/libs/db/schema"
import { eq } from "drizzle-orm"

export async function dashboardLifeExpectancy(country?: string) {
  if (!country) return

  const [lifeExpectancy] = await db
    .select()
    .from(lifeExpectancyTable)
    .where(eq(lifeExpectancyTable.country, country))

  return lifeExpectancy
}
