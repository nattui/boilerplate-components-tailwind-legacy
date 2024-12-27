import { type ButtonHTMLAttributes, forwardRef } from "react"

export const buttonStyles = {
  base: [
    "active:bg-mauve-4",
    "active:text-mauve-12",
    "border",
    "border-mauve-a4",
    "border-solid",
    "cursor-pointer",
    "data-[active=true]:bg-mauve-4",
    "data-[active=true]:text-mauve-12",
    "flex",
    "font-500",
    "hover:bg-mauve-3",
    "hover:text-mauve-12",
    "items-center",
    "justify-center",
    "px-12",
    "py-6",
    "rounded-6",
    "select-none",
    "shrink-0",
    "text-15",
    "transition-colors",
  ].join(" "),
}

type ButtonProps = ButtonHTMLAttributes<ButtonRef>
type ButtonRef = HTMLButtonElement

const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const { className: customStyles = "", type = "button", ...rest } = props

  const combinedStyles = `${buttonStyles.base} ${customStyles}`.trim()

  return <button className={combinedStyles} ref={ref} type={type} {...rest} />
})

Button.displayName = "Button"

export default Button
