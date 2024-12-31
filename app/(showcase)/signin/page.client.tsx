"use client"

import Button from "@/components/primitives/button"
import Input from "@/components/primitives/input"
import Label from "@/components/primitives/label"
import { signInSchema } from "@/libs/validation/sign.schema"
import { API, ROUTE } from "@/utils/constants"
import { SignIn } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { type FormEvent, useState } from "react"

export default function SignInClientPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>()

  const router = useRouter()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    const result = signInSchema.safeParse({ email, password })
    if (!result.success) {
      const error = result.error.flatten().fieldErrors
      setErrorMessage(error.email?.[0] || error.password?.[0])
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch(API.AUTH.SIGNIN, {
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      })
      const data = await response.json()

      if (!response.ok) {
        setErrorMessage(data.message)
        return
      }

      router.push(ROUTE.HOME)
      router.refresh()
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col">
      {errorMessage && <p className="mb-16 text-red-9">{errorMessage}</p>}
      <form className="flex w-320 flex-col" onSubmit={handleSubmit}>
        <Label className="mb-4" htmlFor="email">
          Email
        </Label>
        <Input
          autoComplete="email"
          autoFocus
          className="mb-16"
          defaultValue="test@example.com"
          id="email"
          name="email"
          required
          type="email"
        />
        <Label className="mb-4" htmlFor="password">
          Password
        </Label>
        <Input
          autoComplete="current-password"
          className="mb-16"
          defaultValue="123123123"
          id="password"
          minLength={8}
          name="password"
          required
          type="password"
        />
        <Button
          fullWidth
          isLoading={isLoading}
          leadingVisual={<SignIn size={16} />}
          size="extraLarge"
          type="submit"
        >
          Sign in
        </Button>
      </form>
    </div>
  )
}
