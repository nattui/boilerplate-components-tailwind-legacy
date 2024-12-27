"use client"

import Button from "@/components/button"
import Input from "@/components/input"
import Label from "@/components/label"
import { FormEvent } from "react"

export default function InputsPage() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <div className="flex h-[100dvh] flex-col items-center gap-16 overflow-y-auto py-128">
      <form className="flex w-320 flex-col" onSubmit={onSubmit}>
        <Label className="mb-8" htmlFor="email">
          Email
        </Label>
        <Input
          autoFocus
          className="mb-16"
          fullWidth
          id="email"
          name="email"
          required
          type="email"
        />
        <Label className="mb-8" htmlFor="password">
          Password
        </Label>
        <Input
          className="mb-16"
          fullWidth
          id="password"
          name="password"
          required
          type="password"
        />
        <Button fullWidth size="large" type="submit">
          Continue
        </Button>
      </form>
    </div>
  )
}
