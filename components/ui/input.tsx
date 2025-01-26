import type { ComponentProps, JSX } from "react"

export interface InputProps extends ComponentProps<"input"> {}

export const inputStyles = {
  base: [
    "bg-gray-2",
    "border-gray-a4",
    "border-solid",
    "border",
    "disabled:bg-gray-2",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
    "duration-150",
    "focus-visible:outline-2",
    "focus-visible:outline-primary-9",
    "focus-visible:outline-offset-2",
    "focus:border-gray-a8",
    "font-400",
    "h-40",
    "hover:border-gray-a6",
    "placeholder:text-gray-11",
    "px-12",
    "rounded-8",
    "shadow-1",
    "text-14",
    "text-gray-12",
    "transition-[border-color,background-color]",
    "w-full",
  ].join(" "),
  password: "font-mono",
} as const

export default function Input(props: InputProps): JSX.Element {
  const { className: customStyles = "", type = "text", ...rest } = props

  const combinedStyles = `
    ${inputStyles.base}
    ${type === "password" ? inputStyles.password : ""}
    ${customStyles}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return <input className={combinedStyles} type={type} {...rest} />
}
