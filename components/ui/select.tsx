import type { ComponentProps, JSX } from "react"
import { inputStyles } from "@/components/ui/input"
import { theme } from "@/components/ui/theme"
import { CaretDown } from "@phosphor-icons/react"

export interface SelectProps extends ComponentProps<"select"> {}

export default function Select(props: SelectProps): JSX.Element {
  const { children, className: customStyles = "", ...rest } = props

  const combinedStyles = `
    ${theme.border.base}
    ${theme.border.color.active}
    ${theme.border.color.base}
    ${theme.border.color.disabled}
    ${theme.border.color.focus}
    ${theme.border.color.hover}
    ${theme.duration}
    ${theme.outline}
    ${theme.rounded}
    ${theme.shadow}
    ${inputStyles.base}
    ${customStyles}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return (
    <div className="relative">
      <select className={combinedStyles} {...rest}>
        {children}
      </select>
      <CaretDown className="absolute top-12 right-12" size={16} />
    </div>
  )
}
