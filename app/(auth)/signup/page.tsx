import { redirect } from "next/navigation"
import SignUpClientPage from "@/app/(auth)/signup/page.client"
import { getIsAuthenticated } from "@/libs/session"
import { ROUTE } from "@/utils/constants"

export default async function SignUpPage() {
  const isAuthenticated = await getIsAuthenticated()
  if (isAuthenticated) redirect(ROUTE.HOME)

  return <SignUpClientPage />
}
