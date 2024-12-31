import { db } from "@/libs/db"
import { users as usersSchema } from "@/libs/db/schema"

export default async function UsersPage() {
  const users = await db.select().from(usersSchema)

  return (
    <div className="flex flex-col gap-32 p-32">
      {users.map((user) => (
        <div
          className="shadow-sm flex flex-col gap-4 rounded-8 border border-mauve-a6 p-16 font-mono text-14 shadow-1"
          key={user.id}
        >
          <div>
            {user.id} {user.fullName}
          </div>
          <div>{user.phone}</div>
        </div>
      ))}
    </div>
  )
}
