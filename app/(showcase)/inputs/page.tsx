import Button from "@/components/ui/button"
import IconButton from "@/components/ui/icon-button"
import Input from "@/components/ui/input"
import {
  LucideBan,
  LucideCopy,
  LucideDownload,
  LucideEye,
  LucideLock,
  LucideLogIn,
  LucideMail,
} from "lucide-react"
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
            <LucideMail
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
                <LucideEye
                  className="text-gray-9 group-hover:text-gray-12 group-active:text-gray-12 transition-colors"
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
            <LucideLock
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
          start={<LucideLogIn size={16} />}
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
            <LucideBan
              className="text-gray-9 pointer-events-none absolute top-12 left-12"
              size={16}
            />
          }
          text={{ label: "Disabled" }}
        />
      </div>

      {/* Read-only */}
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
              <LucideCopy
                className="text-gray-9 group-hover:text-gray-12 group-active:text-gray-12 transition-colors"
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
              <LucideDownload
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

      <div className="mt-64 flex w-320 flex-col">
        <Input
          id="info"
          text={{ info: "This is an info text", label: "Information" }}
        />
      </div>

      <div className="mt-64 flex w-320 flex-col">
        <Input
          data-invalid={true}
          defaultValue="invalid@email"
          id="error"
          text={{ error: "Email is invalid", label: "Error" }}
        />
      </div>
    </>
  )
}
