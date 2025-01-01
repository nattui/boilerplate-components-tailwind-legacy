"use client"

import { signOut } from "@/actions/sign-out"
import { SignOut } from "@phosphor-icons/react"
import { useActionState } from "react"
import Button from "./primitives/button"

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
        leadingVisual={<SignOut size={16} />}
        type="submit"
      >
        Sign out
      </Button>
    </form>
  )
}
