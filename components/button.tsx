import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from "react"

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<ButtonRef>, "children"> {
  fullWidth?: boolean
  leadingVisual?: ReactNode
  size?: ButtonSize
  text?: string
  trailingVisual?: ReactNode
}
export type ButtonRef = HTMLButtonElement
export type ButtonSize = "extraLarge" | "large" | "medium" | "small"

export const buttonStyles = {
  base: [
    "active:bg-mauve-4",
    "active:border-mauve-a6",
    "bg-mauve-2",
    "border-mauve-a4",
    "border-solid",
    "border",
    "cursor-pointer",
    "data-[active=true]:bg-mauve-4",
    "disabled:!bg-mauve-2",
    "disabled:!border-mauve-a4",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
    "duration-150",
    "flex",
    "focus-visible:outline-2",
    "focus-visible:outline-crimson-9",
    "focus-visible:outline-offset-2",
    "font-500",
    "hover:bg-mauve-3",
    "hover:border-mauve-a5",
    "items-center",
    "justify-center",
    "outline-none",
    "rounded-6",
    "select-none",
    "shrink-0",
    "text-mauve-12",
    "transition-[background-color,border-color,opacity]",
  ].join(" "),
  fullWidth: "w-full",
  size: {
    extraLarge: ["px-16", "gap-10", "text-17", "h-40"].join(" "),
    large: ["px-12", "gap-8", "text-16", "h-36"].join(" "),
    medium: ["px-8", "gap-6", "text-15", "h-32"].join(" "),
    small: ["px-6", "gap-4", "text-14", "h-28"].join(" "),
  },
} as const

export const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const {
    className: customStyles = "",
    fullWidth = false,
    leadingVisual,
    size = "medium",
    text = "",
    trailingVisual,
    type = "button",
    ...rest
  } = props

  const combinedStyles = `
    ${buttonStyles.base}
    ${buttonStyles.size[size]}
    ${fullWidth ? buttonStyles.fullWidth : ""}
    ${customStyles}
  `.trim()

  return (
    <button className={combinedStyles} ref={ref} type={type} {...rest}>
      {leadingVisual}
      <span>{text}</span>
      {trailingVisual}
    </button>
  )
})

Button.displayName = "Button"

export default Button
