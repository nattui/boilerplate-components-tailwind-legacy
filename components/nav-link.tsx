import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

interface NavLinkProps {
  children: ReactNode
  href: string
}

export function NavLink({ children, href }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      className="px-8 py-4 text-14 font-500 hover:text-mauve-12 hover:underline data-[active=true]:text-mauve-12 data-[active=true]:underline"
      data-active={isActive}
      href={href}
    >
      {children}
    </Link>
  )
}
