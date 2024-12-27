import { forwardRef, type InputHTMLAttributes } from "react"

export interface InputProps
  extends Omit<InputHTMLAttributes<InputRef>, "size"> {
  error?: boolean
  fullWidth?: boolean
  size?: InputSize
}
export type InputRef = HTMLInputElement
export type InputSize = "extraSmall" | "large" | "medium" | "small"

export const inputStyles = {
  base: [
    "bg-mauve-1",
    "border-mauve-a4",
    "border-solid",
    "border",
    "duration-150",
    "font-400",
    "outline-none",
    "placeholder:text-mauve-11",
    "rounded-6",
    "text-mauve-12",
    "transition-[border-color,background-color]",
    "focus:border-mauve-a8",
    "hover:border-mauve-a6",
    "disabled:bg-mauve-2",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
    "focus-visible:outline-2",
    "focus-visible:outline-crimson-9",
    "focus-visible:outline-offset-2",
  ].join(" "),
  error: [
    "!border-red-a8",
    "focus:!border-red-a8",
    "hover:!border-red-a8",
  ].join(" "),
  fullWidth: "w-full",
  size: {
    extraSmall: ["px-6", "text-14", "h-28"].join(" "),
    large: ["px-16", "text-17", "h-40"].join(" "),
    medium: ["px-12", "text-16", "h-36"].join(" "),
    small: ["px-8", "text-15", "h-32"].join(" "),
  },
} as const

export const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const {
    className: customStyles = "",
    error = false,
    fullWidth = false,
    size = "medium",
    type = "text",
    ...rest
  } = props

  const combinedStyles = `
    ${inputStyles.base}
    ${inputStyles.size[size]}
    ${fullWidth ? inputStyles.fullWidth : ""}
    ${error ? inputStyles.error : ""}
    ${customStyles}
  `.trim()

  return <input className={combinedStyles} ref={ref} type={type} {...rest} />
})

Input.displayName = "Input"

export default Input
