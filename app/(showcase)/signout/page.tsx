import { getIsAuthenticated } from "@/libs/session"
import { redirect } from "next/navigation"
import SignOutClientPage from "./page.client"

export default async function SignOutPage() {
  const isAuthenticated = await getIsAuthenticated()
  if (!isAuthenticated) redirect("/")

  return <SignOutClientPage />
}
