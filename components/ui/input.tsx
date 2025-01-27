import type { ComponentProps, JSX } from "react"
import { theme } from "@/components/ui/theme"

export interface InputProps extends ComponentProps<"input"> {}

export const inputStyles = {
  base: [
    "appearance-none",
    "bg-gray-2",
    "disabled:bg-gray-2",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
    "font-400",
    "placeholder:text-gray-9",
    "px-12",
    "text-14",
    "text-gray-12",
    "transition-[background-color,border-color]",
    "w-full",
    theme.border.base,
    theme.border.color.active,
    theme.border.color.base,
    theme.border.color.disabled,
    theme.border.color.focus,
    theme.border.color.hover,
    theme.duration,
    theme.outline,
    theme.rounded,
    theme.shadow,
  ].join(" "),
  height: "h-40",
  password: "font-mono",
} as const

export default function Input(props: InputProps): JSX.Element {
  const { className: customStyles = "", type = "text", ...rest } = props

  const combinedStyles = `
    ${inputStyles.base}
    ${inputStyles.height}
    ${type === "password" ? inputStyles.password : ""}
    ${customStyles}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return <input className={combinedStyles} type={type} {...rest} />
}
