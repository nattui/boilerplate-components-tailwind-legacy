import { type ButtonHTMLAttributes, forwardRef } from "react"

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
    large: ["px-12", "text-16", "h-36"].join(" "),
    medium: ["px-8", "text-15", "h-32"].join(" "),
    small: ["px-6", "text-14", "h-28"].join(" "),
  },
}

type ButtonProps = ButtonHTMLAttributes<ButtonRef> & {
  size?: "large" | "medium" | "small"
}
type ButtonRef = HTMLButtonElement

const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const {
    className: customStyles = "",
    size = "medium",
    type = "button",
    ...rest
  } = props

  const combinedStyles = `
    ${buttonStyles.base}
    ${buttonStyles.size[size]}
    ${customStyles}
  `.trim()

  return <button className={combinedStyles} ref={ref} type={type} {...rest} />
})

Button.displayName = "Button"

export default Button
