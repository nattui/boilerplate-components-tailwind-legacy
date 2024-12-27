"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavLinkProps {
  children: ReactNode
  href: string
}

export function NavLink({ children, href }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      className="rounded-6 px-8 py-4 text-14 font-500 outline-none hover:text-mauve-12 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson-9 data-[active=true]:text-mauve-12 data-[active=true]:underline"
      data-active={isActive}
      href={href}
    >
      {children}
    </Link>
  )
}
