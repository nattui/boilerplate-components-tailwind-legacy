import type { JSX, ReactNode } from "react"
import ButtonSpinner from "@/components/primitives/button-spinner"

export type ButtonProps = JSX.IntrinsicElements["button"] & {
  children?: string
  fullWidth?: boolean
  isLoading?: boolean
  leadingVisual?: ReactNode
  size?: ButtonSize
  trailingVisual?: ReactNode
  variant?: ButtonVariant
}
export type ButtonSize =
  | "extraLarge"
  | "extraSmall"
  | "large"
  | "medium"
  | "small"
export type ButtonVariant = "primary" | "secondary"

export const buttonStyles = {
  base: [
    "border-solid",
    "border",
    "cursor-pointer",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
    "duration-150",
    "flex",
    "focus-visible:outline-2",
    "focus-visible:outline-crimson-9",
    "focus-visible:outline-offset-2",
    "font-500",
    "items-center",
    "justify-center",
    "outline-none",
    "rounded-8",
    "select-none",
    "shrink-0",
    "text-14",
    "transition-[background-color,border-color,opacity]",
  ].join(" "),
  fullWidth: "w-full",
  size: {
    extraLarge: ["px-20", "gap-12", "h-44"].join(" "),
    extraSmall: ["px-6", "gap-4", "h-28"].join(" "),
    large: ["px-16", "gap-10", "h-40"].join(" "),
    medium: ["px-12", "gap-8", "h-36"].join(" "),
    small: ["px-8", "gap-6", "h-32"].join(" "),
  },
  variant: {
    primary: [
      "active:bg-mauve-7",
      "active:border-mauve-7",
      "bg-mauve-1",
      "border-mauve-1",
      "dark",
      "data-[active=true]:bg-mauve-7",
      "data-[active=true]:border-mauve-7",
      "disabled:!bg-mauve-1",
      "disabled:!border-mauve-1",
      "hover:bg-mauve-6",
      "hover:border-mauve-6",
      "text-mauve-12",
    ].join(" "),
    secondary: [
      "active:bg-mauve-4",
      "active:border-mauve-a8",
      "bg-mauve-2",
      "border-mauve-a4",
      "data-[active=true]:bg-mauve-4",
      "data-[active=true]:border-mauve-a8",
      "disabled:!bg-mauve-2",
      "disabled:!border-mauve-a4",
      "hover:bg-mauve-3",
      "hover:border-mauve-a6",
      "text-mauve-12",
    ].join(" "),
  },
} as const

export default function Button(props: ButtonProps) {
  const {
    children = "",
    className: customStyles = "",
    disabled = false,
    fullWidth = false,
    isLoading = false,
    leadingVisual,
    size = "medium",
    trailingVisual,
    type = "button",
    variant = "primary",
    ...rest
  } = props

  const combinedStyles = `
    ${buttonStyles.base}
    ${buttonStyles.size[size]}
    ${buttonStyles.variant[variant]}
    ${fullWidth ? buttonStyles.fullWidth : ""}
    ${customStyles}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return (
    <button
      className={combinedStyles}
      type={type}
      {...rest}
      disabled={disabled || isLoading}
    >
      {!isLoading && leadingVisual}
      {isLoading && <ButtonSpinner />}
      <span>{children}</span>
      {trailingVisual}
    </button>
  )
}
