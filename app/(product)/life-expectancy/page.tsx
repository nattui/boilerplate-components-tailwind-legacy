import LifeExpectancyClientPage from "@/app/(product)/life-expectancy/page.client"
import { getIsAuthenticated } from "@/libs/session"
import { ROUTE } from "@/utils/constants"
import { redirect } from "next/navigation"

export default async function LifeExpectancyPage() {
  const isAuthenticated = await getIsAuthenticated()
  if (!isAuthenticated) redirect(ROUTE.SIGNIN)

  return <LifeExpectancyClientPage />
}
