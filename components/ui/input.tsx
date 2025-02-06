import type { ComponentProps, JSX, ReactNode } from "react"
import Label from "@/components/ui/label"
import { theme } from "@/components/ui/theme"

export interface InputProps extends Omit<ComponentProps<"input">, "className"> {
  className?: {
    helper?: string
    input?: string
    label?: string
    root?: string
  }
  end?: ReactNode
  start?: ReactNode
  text?: {
    helper?: string
    label?: string
  }
}

export const inputStyles = {
  base: [
    "appearance-none",
    "bg-gray-2",
    "cursor-text",
    "disabled:bg-gray-2",
    "font-400",
    "h-40",
    "leading-150",
    "placeholder:select-none",
    "placeholder:text-gray-9",
    "px-12",
    "text-14",
    "text-gray-12",
    "transition-[background-color,border-color,opacity]",
    "w-full",
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
    theme.shadow,
  ].join(" "),
  password: "font-mono",
} as const

export default function Input(props: InputProps): JSX.Element {
  const {
    className = {
      helper: "",
      input: "",
      label: "",
      root: "",
    },
    end,
    id = "",
    required = false,
    start,
    text = {
      helper: "",
      label: "",
    },
    type = "text",
    ...rest
  } = props

  const combinedStyles = `
    ${inputStyles.base}
    ${type === "password" ? inputStyles.password : ""}
    ${className?.input}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return (
    <div className={`flex flex-col ${className?.root}`.trim()}>
      {text.label && (
        <Label className={`mb-4 ${className?.label}`.trim()} htmlFor={id}>
          {text.label}
        </Label>
      )}

      <div className="relative flex w-full">
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

      {text.helper && (
        <p className={`text-13 text-gray-11 mt-4 ${className?.helper}`.trim()}>
          {text.helper}
        </p>
      )}
    </div>
  )
}
