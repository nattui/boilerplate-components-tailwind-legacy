"use client"

import { signInCredentials } from "@/actions/sign-in-credentials"
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import Label from "@/components/ui/label"
import { SignIn } from "@phosphor-icons/react"
import { useActionState, useState } from "react"

const initialState = { message: "" }

export default function SignInClientPage() {
  const [email, setEmail] = useState("test@example.com")
  const [password, setPassword] = useState("123123123")

  const [state, formAction, pending] = useActionState(
    signInCredentials,
    initialState,
  )

  return (
    <div className="flex w-full max-w-320 flex-col">
      <h1 className="mb-16 text-24 font-600">Sign in</h1>

      {state.message && <p className="mb-16 text-red-9">{state.message}</p>}

      <form action={formAction} className="flex flex-col">
        <Label className="mb-4" htmlFor="email">
          Email
        </Label>
        <Input
          autoComplete="email"
          autoFocus
          className="mb-16"
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
          className="mb-16"
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
