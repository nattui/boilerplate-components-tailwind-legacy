import { NavLink } from "@/components/web/nav-link"
import { getIsAuthenticated } from "@/libs/session"
import ButtonSignOut from "../button-sign-out"

export default async function Topbar() {
  const isAuthenticated = await getIsAuthenticated()

  return (
    <div className="flex flex-wrap items-center px-64 py-32">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/buttons">Buttons</NavLink>
      <NavLink href="/inputs">Inputs</NavLink>
      {!isAuthenticated && <NavLink href="/signin">Sign in</NavLink>}
      {isAuthenticated && <ButtonSignOut className="ml-8" />}
    </div>
  )
}
