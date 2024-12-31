"use client"

import Button from "@/components/primitives/button"
import { API } from "@/utils/constants"
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
      router.push("/")
      router.refresh()
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }
  return (
    <Button className={className} disabled={isLoading} onClick={signOut}>
      {isLoading ? "Loading..." : "Sign out"}
    </Button>
  )
}
