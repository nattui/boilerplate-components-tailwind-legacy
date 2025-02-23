import type { ComponentProps, JSX, ReactNode } from "react"
import Label from "@/components/ui/label"
import { theme } from "@/components/ui/theme"

export interface InputProps extends Omit<ComponentProps<"input">, "className"> {
  className?: {
    input?: string
    root?: string
  }
  end?: ReactNode
  start?: ReactNode
  text?: {
    error?: string
    info?: string
    label?: string
  }
}

export const inputStyles = {
  base: [
    "appearance-none",
    "cursor-text",
    "font-400",
    "h-40",
    "data-[invalid]:!border-[crimson]",
    "data-[invalid]:!text-[crimson]",
    "leading-150",
    "placeholder:select-none",
    "placeholder:text-gray-9",
    "px-12",
    "text-14",
    "text-gray-12",
    "transition-[background-color,border-color,opacity]",
    "w-full",
    theme.bg.base,
    theme.bg.disabled,
    theme.border.base,
    theme.border.color.active,
    theme.border.color.base,
    theme.border.color.disabled,
    theme.border.color.focus,
    theme.border.color.hover,
    theme.disabled,
    theme.duration,
    theme.outline,
    theme.rounded,
    theme.shadow.box,
  ].join(" "),
  password: "font-mono",
} as const

export default function Input(props: InputProps): JSX.Element {
  const {
    autoComplete = "off",
    className = {
      input: "",
      root: "",
    },
    end,
    id = "",
    required = false,
    start,
    text = {
      error: "",
      info: "",
      label: "",
    },
    type = "text",
    ...rest
  } = props

  const isPassword =
    autoComplete === "current-password" ||
    autoComplete === "new-password" ||
    id === "password" ||
    type === "password"

  const combinedStyles = `
    ${inputStyles.base}
    ${isPassword ? inputStyles.password : ""}
    ${className?.input}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return (
    <div className={`flex w-full flex-col ${className?.root}`.trim()}>
      {text.label && (
        <Label className="mb-4" htmlFor={id}>
          {text.label}
        </Label>
      )}

      <div className="relative flex">
        {start}
        <input
          className={combinedStyles}
          id={id}
          name={id}
          required={required}
          type={type}
          {...rest}
        />
        {end}
      </div>

      {text.info && !text.error && (
        <p className="text-13 text-gray-11 mt-4">{text.info}</p>
      )}
      {text.error && !text.info && (
        <p className="text-13 mt-4 text-[crimson]">{text.error}</p>
      )}
    </div>
  )
}
