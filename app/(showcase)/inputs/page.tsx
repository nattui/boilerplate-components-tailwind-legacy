import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import {
  EnvelopeSimple,
  LockSimple,
  Prohibit,
  SignIn,
} from "@phosphor-icons/react/dist/ssr"

export default function InputsPage() {
  return (
    <>
      <div className="flex w-320 flex-col">
        <Input
          autoFocus
          className="mb-16 pl-36"
          id="email"
          label="Email"
          placeholder="email@example.com"
          required
          start={
            <EnvelopeSimple
              className="text-gray-9 pointer-events-none absolute top-12 left-12"
              size={16}
            />
          }
          type="email"
        />

        <Input
          className="mb-16 pl-36"
          id="password"
          label="Password"
          placeholder="••••••••"
          required
          start={
            <LockSimple
              className="text-gray-9 pointer-events-none absolute top-12 left-12"
              size={16}
            />
          }
          type="password"
        />

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
        <Input
          className="pl-36"
          disabled
          id="disabled"
          label="Disabled"
          placeholder="Disabled"
          start={
            <Prohibit
              className="text-gray-9 pointer-events-none absolute top-12 left-12"
              size={16}
            />
          }
        />
      </div>
    </>
  )
}
