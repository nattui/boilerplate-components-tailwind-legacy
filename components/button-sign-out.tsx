"use client"

import { LucideLogOut } from "lucide-react"
import { useActionState } from "react"
import { signOut } from "@/actions/sign-out"
import Button from "@/components/ui/button"

export interface ButtonSignOutProps {
  className?: string
}

const initialState = { message: "" }

export default function ButtonSignOut({ className }: ButtonSignOutProps) {
  const [, formAction, pending] = useActionState(signOut, initialState)

  return (
    <form action={formAction}>
      <Button
        className={className}
        isLoading={pending}
        start={<LucideLogOut size={16} />}
        type="submit"
      >
        Sign out
      </Button>
    </form>
  )
}
