import { NavLink } from "@/components/web/nav-link"
import { getIsAuthenticated } from "@/libs/session"
import { ROUTE } from "@/utils/constants"
import ButtonSignOut from "../button-sign-out"

export default async function Topbar() {
  const isAuthenticated = await getIsAuthenticated()

  return (
    <div className="flex flex-wrap items-center px-64 py-32">
      <NavLink href={ROUTE.HOME}>Home</NavLink>
      <NavLink href={ROUTE.BUTTONS}>Buttons</NavLink>
      <NavLink href={ROUTE.INPUTS}>Inputs</NavLink>
      <NavLink href={ROUTE.USERS}>Users</NavLink>
      {!isAuthenticated && <NavLink href={ROUTE.SIGNIN}>Sign in</NavLink>}
      {!isAuthenticated && <NavLink href={ROUTE.SIGNUP}>Sign up</NavLink>}
      {isAuthenticated && <ButtonSignOut className="ml-8" />}
    </div>
  )
}
