import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from "react"

export const buttonStyles = {
  base: [
    "active:bg-mauve-4",
    "active:border-mauve-a6",
    "active:text-mauve-12",
    "bg-mauve-2",
    "border-mauve-a4",
    "border-solid",
    "border",
    "cursor-pointer",
    "data-[active=true]:bg-mauve-4",
    "data-[active=true]:text-mauve-12",
    "disabled:!bg-mauve-2",
    "disabled:!border-mauve-a4",
    "disabled:!text-mauve-a11",
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
    "hover:text-mauve-12",
    "items-center",
    "justify-center",
    "outline-none",
    "rounded-6",
    "select-none",
    "shrink-0",
    "text-mauve-a11",
    "transition-[background-color,border-color,color,opacity]",
  ].join(" "),
  size: {
    large: ["px-12", "gap-8", "text-16", "h-36"].join(" "),
    medium: ["px-8", "gap-6", "text-15", "h-32"].join(" "),
    small: ["px-6", "gap-4", "text-14", "h-28"].join(" "),
  },
}

type ButtonProps = Omit<ButtonHTMLAttributes<ButtonRef>, "children"> & {
  leadingVisual?: ReactNode
  size?: "large" | "medium" | "small"
  text?: string
  trailingVisual?: ReactNode
}
type ButtonRef = HTMLButtonElement

const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const {
    className: customStyles = "",
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
