import SignInClientPage from "@/app/(showcase)/signin/page.client"
import { getIsAuthenticated } from "@/libs/session"
import { redirect } from "next/navigation"

export default async function SignInPage() {
  const isAuthenticated = await getIsAuthenticated()
  if (isAuthenticated) redirect("/")

  return <SignInClientPage />
}
