"use client"

import { NavLink } from "@/components/nav-link"

export default function Topbar() {
  return (
    <div className="flex items-center p-64">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/buttons">Buttons</NavLink>
      <NavLink href="/inputs">Inputs</NavLink>
    </div>
  )
}
