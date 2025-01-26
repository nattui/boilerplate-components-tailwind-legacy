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
    "h-40",
    "placeholder:text-gray-11",
    "px-12",
    "text-14",
    "text-gray-12",
    "transition-[background-color,border-color]",
    "w-full",
  ].join(" "),
  password: "font-mono",
} as const

export default function Input(props: InputProps): JSX.Element {
  const { className: customStyles = "", type = "text", ...rest } = props

  const combinedStyles = `
    ${theme.border.base}
    ${theme.border.color.active}
    ${theme.border.color.base}
    ${theme.border.color.disabled}
    ${theme.border.color.focus}
    ${theme.border.color.hover}
    ${theme.duration}
    ${theme.outline}
    ${theme.rounded}
    ${theme.shadow}
    ${inputStyles.base}
    ${type === "password" ? inputStyles.password : ""}
    ${customStyles}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return <input className={combinedStyles} type={type} {...rest} />
}
