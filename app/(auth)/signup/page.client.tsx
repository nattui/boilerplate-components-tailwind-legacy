"use client"

import { signUpCredentials } from "@/actions/sign-up-credentials"
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import Label from "@/components/ui/label"
import { SignIn } from "@phosphor-icons/react"
import { useActionState } from "react"

const initialState = { message: "" }

export default function SignUpClientPage() {
  const [state, formAction, pending] = useActionState(
    signUpCredentials,
    initialState,
  )

  return (
    <div className="flex w-full max-w-320 flex-col">
      <h1 className="mb-16 text-24 font-600">Sign up</h1>

      {state.message && <p className="mb-16 text-red-9">{state.message}</p>}

      <form action={formAction} className="flex flex-col">
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
          Sign up
        </Button>
      </form>
    </div>
  )
}
