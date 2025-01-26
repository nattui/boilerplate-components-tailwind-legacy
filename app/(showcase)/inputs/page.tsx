"use client"

import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import Label from "@/components/ui/label"

export default function InputsPage() {
  return (
    <form
      className="flex w-320 flex-col"
      onSubmit={(event) => event.preventDefault()}
    >
      <Label className="mb-4" htmlFor="email" required>
        Email
      </Label>
      <Input
        autoFocus
        className="mb-16"
        id="email"
        name="email"
        required
        type="email"
      />
      <Label className="mb-4" htmlFor="password" required>
        Password
      </Label>
      <Input
        className="mb-16"
        id="password"
        name="password"
        required
        type="password"
      />
      <Button fullWidth size="extraLarge" type="submit">
        Continue
      </Button>
    </form>
  )
}
