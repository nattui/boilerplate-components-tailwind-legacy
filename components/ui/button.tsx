import type { ComponentProps, JSX, ReactNode } from "react"
import ButtonSpinner from "@/components/ui/button-spinner"

export interface ButtonProps extends ComponentProps<"button"> {
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
    "focus-visible:outline-offset-2",
    "focus-visible:outline-primary-9",
    "font-500",
    "gap-8",
    "items-center",
    "justify-center",
    "rounded-8",
    "select-none",
    "shrink-0",
    "text-14",
    "transition-[background-color,border-color,opacity]",
  ].join(" "),
  size: {
    extraLarge: ["px-20", "h-44"].join(" "),
    extraSmall: ["px-6", "h-28"].join(" "),
    large: ["px-16", "h-40"].join(" "),
    medium: ["px-12", "h-36"].join(" "),
    small: ["px-8", "h-32"].join(" "),
  },
  variant: {
    primary: [
      "active:bg-gray-12/80",
      "active:border-gray-12/80",
      "bg-gray-12",
      "border-gray-12",
      "data-[active=true]:bg-gray-12/80",
      "data-[active=true]:border-gray-12/80",
      "disabled:!bg-gray-12",
      "disabled:!border-gray-12",
      "hover:bg-gray-12/90",
      "hover:border-gray-12/90",
      "text-gray-1",
    ].join(" "),
    secondary: [
      "active:bg-gray-4",
      "active:border-gray-a8",
      "bg-gray-2",
      "border-gray-a4",
      "data-[active=true]:bg-gray-4",
      "data-[active=true]:border-gray-a8",
      "disabled:!bg-gray-2",
      "disabled:!border-gray-a4",
      "hover:bg-gray-3",
      "hover:border-gray-a6",
      "text-gray-12",
    ].join(" "),
  },
  width: {
    fit: "w-fit",
    full: "w-full",
  },
} as const

export default function Button(props: ButtonProps): JSX.Element {
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
    ${fullWidth ? buttonStyles.width.full : buttonStyles.width.fit}
    ${customStyles}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return (
    <button
      className={combinedStyles}
      disabled={disabled || isLoading}
      type={type}
      {...rest}
    >
      {!isLoading && leadingVisual}
      {isLoading && <ButtonSpinner />}
      <span>{children}</span>
      {trailingVisual}
    </button>
  )
}
