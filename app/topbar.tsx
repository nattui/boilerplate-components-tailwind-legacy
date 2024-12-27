"use client"

import { NavLink } from "@/components/nav-link"

export default function Topbar() {
  return (
    <div className="flex items-center gap-8 p-64">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/buttons">Buttons</NavLink>
      <NavLink href="/inputs">Inputs</NavLink>
    </div>
  )
}
