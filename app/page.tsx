import { getUser } from "@/libs/session"

export default async function HomePage() {
  const user = await getUser()

  return (
    <>
      <h1 className="mb-8 font-sans text-24 font-600">Welcome</h1>

      {user && (
        <div className="flex flex-col gap-4 font-mono text-14">
          <p>id: {user.id}</p>
          <p>name: {user.name}</p>
          <p>username: {user.username}</p>
          <p>email: {user.email}</p>
        </div>
      )}
    </>
  )
}
