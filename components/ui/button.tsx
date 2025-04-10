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
    "active:*:transition-transform",
    "active:*:translate-y-1",
    "cursor-pointer",
    "disabled:*:translate-y-0",
    "flex",
    "font-500",
    "gap-8",
    "group",
    "items-center",
    "justify-center",
    "leading-150",
    "select-none",
    "shrink-0",
    "transition-[background-color,border-color,box-shadow,color,filter,opacity]",
    theme.border.base,
    theme.disabled,
    theme.duration,
    theme.outline,
    theme.rounded,
  ].join(" "),
  size: {
    extraLarge: ["h-48", "px-20", "text-16"].join(" "),
    large: ["h-40", "px-16", "text-14"].join(" "),
    medium: ["h-36", "px-12", "text-14"].join(" "),
    small: ["h-32", "px-8", "text-14"].join(" "),
  },
  variant: {
    accent: [
      "[--color-border:var(--color-primary-10)]",
      "[--color-dark:var(--color-primary-10)]",
      "[--color-light:var(--color-primary-9)]",
      "[--color-text:var(--color-primary-1)]",
      "[--shadow-active:inset_0_-1px_0_0_rgba(255,255,255,0.25),inset_0_1px_0_0_rgba(0,0,0,0.1)]",
      "[--shadow-base:inset_0_1px_0_0_rgba(255,255,255,0.25),inset_0_-1px_0_0_rgba(0,0,0,0.1)]",
      "[--shadow-none:inset_0_0_0_0_transparent]",
      "*:[filter:drop-shadow(0_1px_rgb(0_0_0_/_0.1))]",
      "active:shadow-(--shadow-active)",
      "bg-linear-to-b",
      "border-(--color-border)",
      "data-[active=true]:shadow-(--shadow-none)",
      "disabled:shadow-(--shadow-base)",
      "from-(--color-light)",
      "hover:shadow-(--shadow-none)",
      "shadow-(--shadow-base)",
      "text-(--color-text)",
      "to-(--color-dark)",
      theme.opacity.trigger,
      theme.shadow.content.trigger,
      theme.shadow.filter,
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
      "[--color-border:var(--color-gray-12)]",
      "[--color-dark:var(--color-gray-12)]",
      "[--color-light:color-mix(in_oklab,var(--color-gray-12)_90%,transparent)]",
      "[--color-text:var(--color-gray-1)]",
      "[--shadow-active:inset_0_-1px_0_0_rgba(255,255,255,0.25),inset_0_1px_0_0_rgba(0,0,0,0.1)]",
      "[--shadow-base:inset_0_1px_0_0_rgba(255,255,255,0.25),inset_0_-1px_0_0_rgba(0,0,0,0.1)]",
      "[--shadow-none:inset_0_0_0_0_transparent]",
      "*:[filter:drop-shadow(0_1px_rgb(255_255_255_/_0.1))]",
      "active:shadow-(--shadow-active)",
      "bg-linear-to-b",
      "border-(--color-border)",
      "data-[active=true]:shadow-(--shadow-none)",
      "disabled:shadow-(--shadow-base)",
      "from-(--color-light)",
      "hover:shadow-(--shadow-none)",
      "shadow-(--shadow-base)",
      "text-(--color-text)",
      "to-(--color-dark)",
      theme.opacity.trigger,
      theme.shadow.content.trigger,
      theme.shadow.filter,
    ].join(" "),
    secondary: [
      "[--color-border-trigger:var(--color-gray-8)]",
      "[--color-border:var(--color-gray-6)]",
      "[--color-dark:var(--color-gray-3)]",
      "[--color-light:var(--color-gray-1)]",
      "[--color-text-dark:var(--color-gray-12)]",
      "[--color-text-light:var(--color-gray-11)]",
      "[--shadow-active:inset_0_-1px_0_0_rgba(255,255,255,0.25),inset_0_1px_0_0_rgba(0,0,0,0.1)]",
      "[--shadow-base:inset_0_1px_0_0_rgba(255,255,255,0.25),inset_0_-1px_0_0_rgba(0,0,0,0.1)]",
      "[--shadow-none:inset_0_0_0_0_transparent]",
      "active:border-(--color-border-trigger)",
      "active:shadow-(--shadow-active)",
      "active:text-(--color-text-dark)",
      "bg-linear-to-b",
      "border-(--color-border)",
      "data-[active=true]:border-(--color-border-trigger)",
      "data-[active=true]:shadow-(--shadow-none)",
      "data-[active=true]:text-(--color-text-dark)",
      "disabled:border-(--color-border)",
      "disabled:shadow-(--shadow-base)",
      "disabled:text-(--color-text-light)",
      "from-(--color-light)",
      "hover:border-(--color-border-trigger)",
      "hover:shadow-(--shadow-none)",
      "hover:text-(--color-text-dark)",
      "shadow-(--shadow-base)",
      "text-(--color-text)",
      "to-(--color-dark)",
      theme.shadow.filter,
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
