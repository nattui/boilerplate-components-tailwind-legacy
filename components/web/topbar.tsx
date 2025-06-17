import { NavLink } from "@/components/web/nav-link"
import { ROUTE } from "@/utils/constants"

export default async function Topbar() {
  return (
    <div className="mx-auto flex min-h-[80px] w-full flex-wrap items-center justify-center gap-y-16 p-16">
      <NavLink href={ROUTE.HOME}>Home</NavLink>
      <NavLink href={ROUTE.BUTTONS}>Buttons</NavLink>
      <NavLink href={ROUTE.ICON_BUTTONS}>Icon buttons</NavLink>
      <NavLink href={ROUTE.BUTTON_LINKS}>Button links</NavLink>
      <NavLink href={ROUTE.BADGE}>Badge</NavLink>
      <NavLink href={ROUTE.INPUTS}>Inputs</NavLink>
      <NavLink href={ROUTE.TEXTAREA}>Textarea</NavLink>
      <NavLink href={ROUTE.SELECT_2}>Select 2</NavLink>
      <NavLink href={ROUTE.MULTI_SELECT}>Multi select</NavLink>
      <NavLink href={ROUTE.COPY}>Copy</NavLink>
      <NavLink href={ROUTE.MODAL}>Modal</NavLink>
      <NavLink href={ROUTE.USERS}>Users</NavLink>
    </div>
  )
}
