import { signIn } from "@/app/(showcase)/inputs/sign-in"
import Button from "@/components/primitives/button"
import Input from "@/components/primitives/input"
import Label from "@/components/primitives/label"

export default function InputsPage() {
  return (
    <form action={signIn} className="flex w-320 flex-col">
      <Label className="mb-4" htmlFor="email">
        Email
      </Label>
      <Input
        autoFocus
        className="mb-16"
        defaultValue="test@test.com"
        id="email"
        name="email"
        // required
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
        // required
        type="password"
      />
      <Button fullWidth size="extraLarge" type="submit">
        Continue
      </Button>
    </form>
  )
}
