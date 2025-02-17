import type { ComponentProps, JSX, ReactNode } from "react"
import ButtonSpinner from "@/components/ui/button-spinner"
import { theme } from "@/components/ui/theme"

export interface ButtonProps extends ComponentProps<"button"> {
  children?: string
  end?: ReactNode
  fullWidth?: boolean
  isLoading?: boolean
  size?: ButtonSize
  start?: ReactNode
  variant?: ButtonVariant
}

export type ButtonSize = "extraLarge" | "large" | "medium" | "small"
export type ButtonVariant = "accent" | "ghost" | "primary" | "secondary"

export const buttonStyles = {
  base: [
    "cursor-pointer",
    "flex",
    "font-500",
    "gap-8",
    "items-center",
    "justify-center",
    "leading-150",
    "select-none",
    "shrink-0",
    "text-14",
    "transition-[background-color,border-color,box-shadow,color,opacity]",
    theme.border.base,
    theme.disabled,
    theme.duration,
    theme.outline,
    theme.rounded,
  ].join(" "),
  size: {
    extraLarge: ["px-20", "h-44"].join(" "),
    large: ["px-16", "h-40"].join(" "),
    medium: ["px-12", "h-36"].join(" "),
    small: ["px-8", "h-32"].join(" "),
  },
  variant: {
    accent: [
      "active:bg-primary-9/75",
      "active:shadow-[inset_0_0_0_0_transparent]",
      "bg-primary-9",
      "border-transparent",
      "data-[active=true]:bg-primary-9/75",
      "disabled:!bg-primary-9",
      "disabled:!shadow-[inset_0_-1px_0_1px_color-mix(in_oklab,var(--color-primary-9)_100%,transparent),inset_0_0_0_1px_rgba(255,255,255,0.25)]",
      "hover:bg-primary-9/85",
      "hover:shadow-[inset_0_0_0_0_transparent]",
      "shadow-[inset_0_-1px_0_1px_color-mix(in_oklab,var(--color-primary-9)_100%,transparent),inset_0_0_0_1px_rgba(255,255,255,0.25)]",
      "text-primary-1",
      theme.shadow.filter,
      theme.shadow.text,
    ].join(" "),
    ghost: [
      "active:bg-gray-5",
      "active:text-gray-12",
      "bg-transparent",
      "border-transparent",
      "data-[active=true]:bg-gray-5",
      "disabled:text-gray-11",
      "hover:bg-gray-4/75",
      "hover:text-gray-12",
      "text-gray-11",
      theme.bg.disabled,
    ].join(" "),
    primary: [
      "active:bg-gray-12/75",
      "active:shadow-[inset_0_0_0_0_transparent]",
      "bg-gray-12",
      "border-transparent",
      "data-[active=true]:bg-gray-12/75",
      "disabled:!bg-gray-12",
      "disabled:!shadow-[inset_0_-1px_0_1px_color-mix(in_oklab,var(--color-gray-12)_100%,transparent),inset_0_0_0_1px_rgba(255,255,255,0.25)]",
      "hover:bg-gray-12/85",
      "hover:shadow-[inset_0_0_0_0_transparent]",
      "shadow-[inset_0_-1px_0_1px_color-mix(in_oklab,var(--color-gray-12)_100%,transparent),inset_0_0_0_1px_rgba(255,255,255,0.25)]",
      "text-gray-1",
      theme.shadow.filter,
      theme.shadow.text,
    ].join(" "),
    secondary: [
      "active:bg-gray-4/75",
      "active:text-gray-12",
      "data-[active=true]:bg-gray-4/75",
      "disabled:text-gray-11",
      "hover:bg-gray-3/50",
      "hover:text-gray-12",
      "text-gray-11",
      theme.bg.base,
      theme.bg.disabled,
      theme.border.color.active,
      theme.border.color.base,
      theme.border.color.disabled,
      theme.border.color.focus,
      theme.border.color.hover,
      theme.shadow.box,
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
    end,
    fullWidth = false,
    isLoading = false,
    size = "medium",
    start,
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
      {!isLoading && start}
      {isLoading && <ButtonSpinner />}
      <span>{children}</span>
      {!isLoading && end}
    </button>
  )
}
