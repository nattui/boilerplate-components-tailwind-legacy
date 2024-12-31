import { db } from "@/libs/db"
import { users as usersSchema } from "@/libs/db/schema"

export default async function UsersPage() {
  const users = await db.select().from(usersSchema)

  return (
    <div>
      <pre>{JSON.stringify(users, undefined, 2)}</pre>
    </div>
  )
}
