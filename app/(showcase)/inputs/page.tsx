import Button from "@/components/ui/button"
import IconButton from "@/components/ui/icon-button"
import Input from "@/components/ui/input"
import {
  Copy,
  DownloadSimple,
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
          className={{ input: "pl-36", root: "mb-16" }}
          id="email"
          placeholder="email@example.com"
          required
          start={
            <EnvelopeSimple
              className="text-gray-9 pointer-events-none absolute top-12 left-12"
              size={16}
            />
          }
          text={{ label: "Email" }}
          type="email"
        />

        <Input
          className={{ input: "px-36", root: "mb-16" }}
          end={
            <>
              {/* Order matters: accessibility */}
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

              <Link
                className="text-13 text-gray-11 hover:text-gray-12 absolute -top-24 right-0 underline transition-colors"
                href="/inputs"
              >
                Forgot password?
              </Link>
            </>
          }
          id="password"
          placeholder="••••••••"
          required
          start={
            <LockSimple
              className="text-gray-9 pointer-events-none absolute top-12 left-12"
              size={16}
            />
          }
          text={{ label: "Password" }}
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
          className={{ input: "pl-36" }}
          disabled
          id="disabled"
          placeholder="Disabled"
          start={
            <Prohibit
              className="text-gray-9 pointer-events-none absolute top-12 left-12"
              size={16}
            />
          }
          text={{ label: "Disabled" }}
        />
      </div>

      <div className="mt-64 flex w-320 flex-col">
        <Input
          className={{ input: "pr-36" }}
          defaultValue="This is a read-only input"
          end={
            <IconButton
              className="group absolute top-4 right-4"
              size="small"
              variant="ghost"
            >
              <Copy
                className="text-gray-9 group-hover:text-gray-12 transition-colors"
                size={16}
              />
            </IconButton>
          }
          id="read-only"
          placeholder="Read-only"
          readOnly
          text={{ label: "Read-only" }}
        />
      </div>

      <div className="mt-64 flex w-320 flex-col">
        <Input
          className={{ input: "rounded-e-0 pr-36 focus-visible:z-10" }}
          end={
            <IconButton
              className="group rounded-s-0 -ml-1 focus-visible:z-10"
              size="large"
              variant="secondary"
            >
              <DownloadSimple
                className="text-gray-9 group-hover:text-gray-12 transition-colors"
                size={16}
              />
            </IconButton>
          }
          id="email2"
          placeholder="Email"
          text={{ label: "Input with end icon button" }}
        />
      </div>
    </>
  )
}
