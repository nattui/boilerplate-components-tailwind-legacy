"use client"

import Button from "@/components/button"
import { Input } from "@/components/input"
import Label from "@/components/label"
import { FormEvent } from "react"

export default function InputsPage() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <div className="flex h-[100dvh] flex-col items-center gap-16 overflow-y-auto py-128">
      <form className="flex w-320 flex-col" onSubmit={onSubmit}>
        <Label className="mb-8" htmlFor="name">
          Your Name
        </Label>
        <Input
          autoFocus
          className="mb-16"
          fullWidth
          id="name"
          name="name"
          type="text"
        />
        <Button fullWidth size="large" type="submit">
          Continue
        </Button>
      </form>
    </div>
  )
}
