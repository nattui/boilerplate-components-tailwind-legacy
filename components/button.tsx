import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from "react"

export const buttonStyles = {
  base: [
    "active:bg-mauve-4",
    "active:border-mauve-a6",
    "active:text-mauve-12",
    "border-mauve-a4",
    "border-solid",
    "border",
    "cursor-pointer",
    "data-[active=true]:bg-mauve-4",
    "data-[active=true]:text-mauve-12",
    "flex",
    "font-500",
    "hover:bg-mauve-3",
    "hover:border-mauve-a5",
    "hover:text-mauve-12",
    "items-center",
    "justify-center",
    "rounded-6",
    "shrink-0",
    "transition-colors",
  ].join(" "),
  size: {
    large: ["px-12", "gap-8", "text-16", "h-36"].join(" "),
    medium: ["px-8", "gap-6", "text-15", "h-32"].join(" "),
    small: ["px-6", "gap-4", "text-14", "h-28"].join(" "),
  },
}

type ButtonProps = ButtonHTMLAttributes<ButtonRef> & {
  children?: string
  endIcon?: ReactNode
  size?: "large" | "medium" | "small"
  startIcon?: ReactNode
}
type ButtonRef = HTMLButtonElement

const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const {
    children = "",
    className: customStyles = "",
    endIcon,
    size = "medium",
    startIcon,
    type = "button",
    ...rest
  } = props

  const combinedStyles = `
    ${buttonStyles.base}
    ${buttonStyles.size[size]}
    ${customStyles}
  `.trim()

  return (
    <button className={combinedStyles} ref={ref} type={type} {...rest}>
      {startIcon}
      <span>{children}</span>
      {endIcon}
    </button>
  )
})

Button.displayName = "Button"

export default Button
