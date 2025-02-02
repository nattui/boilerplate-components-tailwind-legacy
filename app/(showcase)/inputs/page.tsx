import Button from "@/components/ui/button"
import IconButton from "@/components/ui/icon-button"
import Input from "@/components/ui/input"
import {
  EnvelopeSimple,
  Eye,
  LockSimple,
  Prohibit,
  SignIn,
} from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

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
          end={
            <>
              <Link
                className="text-13 text-gray-a11 absolute -top-24 right-0 underline"
                href="/inputs"
              >
                Forgot password?
              </Link>

              <IconButton
                className="group absolute top-4 right-4"
                size="small"
                variant="ghost"
              >
                <Eye
                  className="text-gray-9 group-hover:text-gray-12 transition-colors"
                  size={16}
                />
              </IconButton>
            </>
          }
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
          size="extraLarge"
          start={<SignIn size={16} />}
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
