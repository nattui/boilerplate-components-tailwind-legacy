"use client"

import Button from "@/components/primitives/button"
import { API, ROUTE } from "@/utils/constants"
import { SignOut } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface ButtonSignOutProps {
  className?: string
}

export default function ButtonSignOut({ className }: ButtonSignOutProps) {
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  async function signOut() {
    setIsLoading(true)
    try {
      await fetch(API.AUTH.SIGNOUT, { method: "POST" })
      router.push(ROUTE.SIGNIN)
      router.refresh()
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }
  return (
    <Button
      className={className}
      isLoading={isLoading}
      leadingVisual={<SignOut size={16} />}
      onClick={signOut}
    >
      Sign out
    </Button>
  )
}
