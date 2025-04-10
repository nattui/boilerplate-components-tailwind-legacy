import type { JSX } from "react"
import type { ComponentProps } from "react"
import { type ButtonProps, buttonStyles } from "@/components/ui/button"
import Link from "next/link"

export interface ButtonLinkProps extends ComponentProps<typeof Link> {
  children?: ButtonProps["children"]
  end?: ButtonProps["end"]
  fullWidth?: ButtonProps["fullWidth"]
  size?: ButtonProps["size"]
  start?: ButtonProps["start"]
  variant?: ButtonProps["variant"]
}

export default function ButtonLink(props: ButtonLinkProps): JSX.Element {
  const {
    children = "",
    className: customStyles = "",
    end,
    fullWidth = false,
    size = "medium",
    start,
    variant = "primary",
    ...rest
  } = props

  const combinedStyles = `
    ${buttonStyles.base}
    ${buttonStyles.size[size]}
    ${buttonStyles.variant[variant]}
    ${fullWidth ? buttonStyles.width.full : buttonStyles.width.base}
    ${customStyles}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return (
    <Link className={combinedStyles} {...rest}>
      {start}
      <span>{children}</span>
      {end}
    </Link>
  )
}
