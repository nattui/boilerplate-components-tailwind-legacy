import type { ComponentProps, JSX, ReactNode } from "react"
import Label from "@/components/ui/label"
import { theme } from "@/components/ui/theme"

export interface InputProps extends ComponentProps<"input"> {
  end?: ReactNode
  label?: string
  start?: ReactNode
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
    className: customStyles = "",
    end,
    id = "",
    label = "",
    required = false,
    start,
    type = "text",
    ...rest
  } = props

  const combinedStyles = `
    ${inputStyles.base}
    ${type === "password" ? inputStyles.password : ""}
    ${customStyles}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return (
    <>
      {label && (
        <Label className="mb-4" htmlFor={id} required={required}>
          {label}
        </Label>
      )}
      <div className="relative">
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
    </>
  )
}
