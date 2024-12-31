import SignInClientPage from "@/app/(auth)/signin/page.client"
import { getIsAuthenticated } from "@/libs/session"
import { ROUTE } from "@/utils/constants"
import { redirect } from "next/navigation"

export default async function SignInPage() {
  const isAuthenticated = await getIsAuthenticated()
  if (isAuthenticated) redirect(ROUTE.HOME)

  return <SignInClientPage />
}
