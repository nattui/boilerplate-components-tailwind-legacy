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
      className="rounded-6 text-14 font-500 hover:text-gray-12 focus-visible:outline-primary-9 data-[active=true]:text-gray-12 px-8 py-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 data-[active=true]:underline"
      data-active={isActive}
      href={href}
    >
      {children}
    </Link>
  )
}
