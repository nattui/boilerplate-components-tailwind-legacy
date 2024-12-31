"use client"

import Button from "@/components/primitives/button"
import { API } from "@/utils/constants"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SignOutClientPage() {
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
    <div className="mx-auto mt-64 w-320">
      <h1 className="mb-16 text-32">Sign out</h1>
      <Button disabled={isLoading} onClick={signOut}>
        {isLoading ? "Loading..." : "Sign out"}
      </Button>
    </div>
  )
}
