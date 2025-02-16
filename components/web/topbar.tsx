import ButtonSignOut from "@/components/button-sign-out"
import { NavLink } from "@/components/web/nav-link"
import { getIsAuthenticated } from "@/libs/session"
import { ROUTE } from "@/utils/constants"

export default async function Topbar() {
  const isAuthenticated = await getIsAuthenticated()

  return (
    <div className="mx-auto flex min-h-[80px] w-full flex-wrap items-center justify-center gap-y-16 p-16">
      <NavLink href={ROUTE.HOME}>Home</NavLink>
      <NavLink href={ROUTE.BUTTONS}>Buttons</NavLink>
      <NavLink href={ROUTE.ICON_BUTTONS}>Icon buttons</NavLink>
      <NavLink href={ROUTE.BADGE}>Badge</NavLink>
      <NavLink href={ROUTE.INPUTS}>Inputs</NavLink>
      <NavLink href={ROUTE.TEXTAREA}>Textarea</NavLink>
      <NavLink href={ROUTE.SELECT_2}>Select 2</NavLink>
      <NavLink href={ROUTE.COPY}>Copy</NavLink>
      <NavLink href={ROUTE.MODAL}>Modal</NavLink>
      <NavLink href={ROUTE.USERS}>Users</NavLink>
      {isAuthenticated && (
        <NavLink href={ROUTE.LIFE_EXPECTANCY}>Life expectancy</NavLink>
      )}
      {isAuthenticated && <ButtonSignOut className="ml-8" />}
      {!isAuthenticated && <NavLink href={ROUTE.SIGNIN}>Sign in</NavLink>}
      {!isAuthenticated && <NavLink href={ROUTE.SIGNUP}>Sign up</NavLink>}
    </div>
  )
}
