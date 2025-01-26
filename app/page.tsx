import { getUser } from "@/libs/session"

export default async function HomePage() {
  const user = await getUser()

  return (
    <>
      <h1 className="text-24 font-500 mb-8 font-sans">Welcome</h1>

      {user && (
        <div className="text-14 flex flex-col gap-4 font-mono">
          <p>id: {user.id}</p>
          <p>name: {user.name}</p>
          <p>username: {user.username}</p>
          <p>email: {user.email}</p>
        </div>
      )}
    </>
  )
}
