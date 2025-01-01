import type { JSX } from "react"
import { inputStyles } from "@/components/primitives/input"
import { CaretDown } from "@phosphor-icons/react"

export type SelectProps = JSX.IntrinsicElements["select"]

export default function Select(props: SelectProps): JSX.Element {
  const { children, className: customStyles = "", ...rest } = props

  const combinedStyles = `
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
      <CaretDown className="absolute right-12 top-12" size={16} />
    </div>
  )
}
