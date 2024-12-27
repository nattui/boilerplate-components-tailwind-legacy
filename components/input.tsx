import type { JSX } from "react"

type InputProps = JSX.IntrinsicElements["input"] & {
  error?: boolean
  fullWidth?: boolean
}

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
    "rounded-6",
    "text-14",
    "text-mauve-12",
    "transition-[border-color,background-color]",
  ].join(" "),
  error: [
    "!border-red-a8",
    "focus:!border-red-a8",
    "hover:!border-red-a8",
  ].join(" "),
  fullWidth: "w-full",
  password: "font-mono",
} as const

export default function Input(props: InputProps) {
  const {
    className: customStyles = "",
    error = false,
    fullWidth = false,
    type = "text",
    ...rest
  } = props

  const combinedStyles = `
    ${inputStyles.base}
    ${error ? inputStyles.error : ""}
    ${fullWidth ? inputStyles.fullWidth : ""}
    ${type === "password" ? inputStyles.password : ""}
    ${customStyles}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return <input className={combinedStyles} type={type} {...rest} />
}
