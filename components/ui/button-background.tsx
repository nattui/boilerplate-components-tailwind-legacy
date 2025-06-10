import type { JSX } from "react"
import type { ButtonProps } from "@/components/ui/button"
import { theme } from "@/components/ui/theme"

export interface ButtonBackgroundProps {
  variant: ButtonProps["variant"]
}

export const buttonBackgroundStyles = {
  base: [
    "-z-10",
    "absolute",
    "bg-linear-to-b",
    "bottom-[50%]",
    "custom-button-background",
    "filter-none!",
    "left-0",
    "opacity-20",
    "right-0",
    "rounded-6",
    "top-1",
    "transition-opacity",
    theme.duration,
  ].join(" "),
  parent: [
    // When the button is active, aria-pressed, disabled, or hovered, the background should be hidden.
    "active:[&>.custom-button-background]:opacity-0",
    "aria-pressed:[&>.custom-button-background]:opacity-0",
    "disabled:[&>.custom-button-background]:opacity-0",
    "hover:[&>.custom-button-background]:opacity-0",
  ].join(" "),
  variant: {
    accent: ["from-primary-7", "to-primary-8"].join(" "),
    primary: ["from-gray-10", "to-gray-11"].join(" "),
  },
} as const

export default function ButtonBackground(
  props: ButtonBackgroundProps,
): JSX.Element {
  const { variant = "primary" } = props

  const combinedBackgroundStyles = `
    ${buttonBackgroundStyles.base}
    ${variant === "accent" && buttonBackgroundStyles.variant.accent}
    ${variant === "primary" && buttonBackgroundStyles.variant.primary}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  if (!(variant === "accent" || variant === "primary")) return <></>

  return <div className={combinedBackgroundStyles} />
}
