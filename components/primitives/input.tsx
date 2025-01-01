import type { JSX } from "react"

export type InputProps = JSX.IntrinsicElements["input"]

export const inputStyles = {
  base: [
    "bg-mauve-2",
    "border-mauve-a4",
    "border-solid",
    "border",
    "disabled:bg-mauve-2",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
    "duration-150",
    "focus-visible:outline-2",
    "focus-visible:outline-crimson-9",
    "focus-visible:outline-offset-2",
    "focus:border-mauve-a8",
    "font-400",
    "h-40",
    "hover:border-mauve-a6",
    "outline-none",
    "placeholder:text-mauve-11",
    "px-12",
    "rounded-8",
    "shadow-1",
    "text-14",
    "text-mauve-12",
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
