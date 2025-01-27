import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import Label from "@/components/ui/label"
import {
  EnvelopeSimple,
  LockSimple,
  SignIn,
} from "@phosphor-icons/react/dist/ssr"

export default function InputsPage() {
  return (
    <>
      <div className="flex w-320 flex-col">
        <Label className="mb-4" htmlFor="email">
          Email
        </Label>
        <div className="relative mb-16">
          <Input
            autoFocus
            className="pl-36"
            id="email"
            name="email"
            placeholder="email@example.com"
            required
            type="email"
          />
          <EnvelopeSimple
            className="text-gray-9 pointer-events-none absolute top-1/2 left-12 -translate-y-1/2"
            size={16}
          />
        </div>

        <Label className="mb-4" htmlFor="password">
          Password
        </Label>
        <div className="relative mb-16">
          <Input
            className="pl-36"
            id="password"
            name="password"
            placeholder="••••••••"
            required
            type="password"
          />
          <LockSimple
            className="text-gray-9 pointer-events-none absolute top-1/2 left-12 -translate-y-1/2"
            size={16}
          />
        </div>
        <Button
          fullWidth
          leadingVisual={<SignIn size={16} />}
          size="extraLarge"
          type="submit"
          variant="accent"
        >
          Sign in
        </Button>
      </div>

      <div className="mt-64 flex w-320 flex-col">
        <Label className="mb-4" htmlFor="disabled">
          Disabled
        </Label>
        <Input disabled id="disabled" name="disabled" placeholder="Disabled" />
      </div>
    </>
  )
}
