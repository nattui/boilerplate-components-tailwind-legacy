"use client"

import { LucideLogIn } from "lucide-react"
import { useActionState, useState } from "react"
import { signInCredentials } from "@/actions/sign-in-credentials"
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import Label from "@/components/ui/label"

export default function SignInClientPage() {
  const [email, setEmail] = useState("test@example.com")
  const [password, setPassword] = useState("123123123")

  const initialState = { message: "" }

  const [state, formAction, pending] = useActionState(
    signInCredentials,
    initialState,
  )

  return (
    <div className="flex w-full max-w-320 flex-col">
      <h1 className="text-24 font-500 mb-16">Sign in</h1>

      {state.message && <p className="text-red-9 mb-16">{state.message}</p>}

      <form action={formAction} className="flex flex-col">
        <Label className="mb-4" htmlFor="email">
          Email
        </Label>
        <Input
          autoComplete="email"
          autoFocus
          className={{ root: "mb-16" }}
          id="email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          required
          type="email"
          value={email}
        />
        <Label className="mb-4" htmlFor="password">
          Password
        </Label>
        <Input
          autoComplete="current-password"
          className={{ root: "mb-16" }}
          id="password"
          minLength={8}
          name="password"
          onChange={(event) => setPassword(event.target.value)}
          required
          type="password"
          value={password}
        />
        <Button
          fullWidth
          isLoading={pending}
          size="extraLarge"
          start={<LucideLogIn size={16} />}
          type="submit"
        >
          Sign in
        </Button>
      </form>
    </div>
  )
}
