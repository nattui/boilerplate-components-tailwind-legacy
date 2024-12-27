import { forwardRef, type InputHTMLAttributes } from "react"

export interface InputProps
  extends Omit<InputHTMLAttributes<InputRef>, "size"> {
  error?: boolean
  fullWidth?: boolean
  size?: InputSize
}
export type InputRef = HTMLInputElement
export type InputSize = "medium"

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
    "focus-visible:outline-offset-2",
    "focus-visible:outline-2",
    "focus-visible:outline-crimson-9",
    "focus:border-mauve-a8",
    "font-400",
    "hover:border-mauve-a6",
    "outline-none",
    "placeholder:text-mauve-11",
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
  size: {
    medium: ["px-12", "h-40"].join(" "),
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
