import type { ComponentProps, JSX, ReactNode } from "react"
import ButtonSpinner from "@/components/ui/button-spinner"
import { theme } from "@/components/ui/theme"

export interface IconButtonProps extends ComponentProps<"button"> {
  children?: ReactNode
  isLoading?: boolean
  size?: IconButtonSize
  variant?: IconButtonVariant
}
export type IconButtonSize =
  | "extraLarge"
  | "extraSmall"
  | "large"
  | "medium"
  | "small"
export type IconButtonVariant = "accent" | "ghost" | "primary" | "secondary"

export const iconButtonStyles = {
  base: [
    "cursor-pointer",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
    "flex",
    "font-500",
    "gap-8",
    "items-center",
    "justify-center",
    "select-none",
    "shrink-0",
    "text-14",
    "transition-[background-color,border-color,box-shadow,opacity]",
  ].join(" "),
  size: {
    extraLarge: ["w-44", "h-44"].join(" "),
    extraSmall: ["w-28", "h-28"].join(" "),
    large: ["w-40", "h-40"].join(" "),
    medium: ["w-36", "h-36"].join(" "),
    small: ["w-32", "h-32"].join(" "),
  },
  variant: {
    accent: [
      "active:bg-primary-9/80",
      "active:border-primary-9/80",
      "active:shadow-[inset_0_0_0_0_transparent]",
      "bg-primary-9",
      "border-transparent",
      "data-[active=true]:bg-primary-9/80",
      "disabled:!bg-primary-9",
      "disabled:!shadow-[inset_0_-1px_0_1px_color-mix(in_oklab,var(--color-primary-9)_100%,transparent),inset_0_0_0_1px_rgba(255,255,255,0.25)]",
      "hover:bg-primary-9/90",
      "hover:shadow-[inset_0_0_0_0_transparent]",
      "shadow-[inset_0_-1px_0_1px_color-mix(in_oklab,var(--color-primary-9)_100%,transparent),inset_0_0_0_1px_rgba(255,255,255,0.25)]",
      "text-primary-1",
    ].join(" "),
    ghost: [
      "active:bg-gray-5",
      "bg-gray-2",
      "border-transparent",
      "data-[active=true]:bg-gray-5",
      "disabled:!bg-gray-2",
      "hover:bg-gray-4",
      "text-gray-12",
    ].join(" "),
    primary: [
      "active:bg-gray-12/80",
      "active:shadow-[inset_0_0_0_0_transparent]",
      "bg-gray-12",
      "border-transparent",
      "data-[active=true]:bg-gray-12/80",
      "disabled:!bg-gray-12",
      "disabled:!shadow-[inset_0_-1px_0_1px_color-mix(in_oklab,var(--color-gray-12)_100%,transparent),inset_0_0_0_1px_rgba(255,255,255,0.25)]",
      "hover:bg-gray-12/90",
      "hover:shadow-[inset_0_0_0_0_transparent]",
      "shadow-[inset_0_-1px_0_1px_color-mix(in_oklab,var(--color-gray-12)_100%,transparent),inset_0_0_0_1px_rgba(255,255,255,0.25)]",
      "text-gray-1",
    ].join(" "),
    secondary: [
      "active:bg-gray-3",
      "bg-gray-2",
      "data-[active=true]:bg-gray-4",
      "disabled:!bg-gray-2",
      "hover:bg-gray-3/50",
      "text-gray-12",
      theme.border.color.active,
      theme.border.color.base,
      theme.border.color.disabled,
      theme.border.color.focus,
      theme.border.color.hover,
      theme.shadow,
    ].join(" "),
  },
} as const

export default function IconButton(props: IconButtonProps): JSX.Element {
  const {
    children = "",
    className: customStyles = "",
    disabled = false,
    isLoading = false,
    size = "medium",
    type = "button",
    variant = "primary",
    ...rest
  } = props

  const combinedStyles = `
    ${theme.border.base}
    ${theme.duration}
    ${theme.outline}
    ${theme.rounded}
    ${iconButtonStyles.base}
    ${iconButtonStyles.size[size]}
    ${iconButtonStyles.variant[variant]}
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
      {isLoading && <ButtonSpinner />}
      {!isLoading && children}
    </button>
  )
}
