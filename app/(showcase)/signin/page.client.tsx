"use client"

import Button from "@/components/primitives/button"
import Input from "@/components/primitives/input"
import Label from "@/components/primitives/label"
import { API } from "@/utils/constants"
import { useRouter } from "next/navigation"
import { type FormEvent, useState } from "react"

export default function SignInClientPage() {
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // TODO: Zod validation
    // Get form data
    const formData = new FormData(event.target as HTMLFormElement)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    setIsLoading(true)
    try {
      const response = await fetch(API.AUTH.SIGNIN, {
        body: JSON.stringify({
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      })
      const data = await response.json()
      console.log(":::: data:", data)

      router.push("/")
      router.refresh()
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  return (
    <form className="flex w-320 flex-col" onSubmit={handleSubmit}>
      <Label className="mb-4" htmlFor="email">
        Email
      </Label>
      <Input
        autoFocus
        className="mb-16"
        defaultValue="test@test.com"
        id="email"
        name="email"
        required
        type="email"
      />
      <Label className="mb-4" htmlFor="password">
        Password
      </Label>
      <Input
        className="mb-16"
        defaultValue="password"
        id="password"
        name="password"
        required
        type="password"
      />
      <Button disabled={isLoading} fullWidth size="extraLarge" type="submit">
        {isLoading ? "Loading..." : "Sign in"}
      </Button>
    </form>
  )
}
