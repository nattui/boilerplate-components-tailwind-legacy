"use client"

import { signInCredentials } from "@/actions/sign-in-credentials"
import Button from "@/components/primitives/button"
import Input from "@/components/primitives/input"
import Label from "@/components/primitives/label"
import { SignIn } from "@phosphor-icons/react"
import { useActionState } from "react"

const initialState = { message: "" }

export default function SignInClientPage() {
  const [state, formAction, pending] = useActionState(
    signInCredentials,
    initialState,
  )

  return (
    <div className="flex flex-col">
      <h1 className="mb-16 text-24 font-600">Sign in</h1>

      {state.message && <p className="mb-16 text-red-9">{state.message}</p>}

      <form action={formAction} className="flex w-320 flex-col">
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
