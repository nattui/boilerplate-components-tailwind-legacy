import { db } from "@/libs/db"
import { lifeExpectancyTable } from "@/libs/db/schema"
import { eq } from "drizzle-orm"

export async function POST(request: Request) {
  const body = await request.json()

  const { country } = body

  const [lifeExpectancy] = await db
    .select()
    .from(lifeExpectancyTable)
    .where(eq(lifeExpectancyTable.country, country))

  return Response.json({ lifeExpectancy })
}
