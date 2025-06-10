"use client"

import { LucideLogIn } from "lucide-react"
import { useActionState } from "react"
import { signUpCredentials } from "@/actions/sign-up-credentials"
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import Label from "@/components/ui/label"

const initialState = { message: "" }

export default function SignUpClientPage() {
  const [state, formAction, pending] = useActionState(
    signUpCredentials,
    initialState,
  )

  return (
    <div className="flex w-full max-w-320 flex-col">
      <h1 className="text-24 font-500 mb-16">Sign up</h1>

      {state.message && <p className="text-red-9 mb-16">{state.message}</p>}

      <form action={formAction} className="flex flex-col">
        <Label className="mb-4" htmlFor="email">
          Email
        </Label>
        <Input
          autoComplete="email"
          autoFocus
          className={{ root: "mb-16" }}
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
          className={{ root: "mb-16" }}
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
          size="extraLarge"
          start={<LucideLogIn size={16} />}
          type="submit"
        >
          Sign up
        </Button>
      </form>
    </div>
  )
}
