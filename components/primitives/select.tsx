import type { JSX } from "react"
import { CaretDown } from "@phosphor-icons/react"

export type SelectProps = JSX.IntrinsicElements["select"]

export const selectStyles = {
  base: [
    "bg-mauve-2",
    "border-mauve-a4",
    "border-solid",
    "border",
    "disabled:bg-mauve-2",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
    "duration-150",
    "focus-visible:outline-2",
    "focus-visible:outline-crimson-9",
    "focus-visible:outline-offset-2",
    "focus:border-mauve-a8",
    "font-400",
    "h-40",
    "hover:border-mauve-a6",
    "outline-none",
    "placeholder:text-mauve-11",
    "px-12",
    "rounded-8",
    "shadow-1",
    "text-14",
    "text-mauve-12",
    "transition-[border-color,background-color]",
    "w-full",
  ].join(" "),
} as const

export default function Select(props: SelectProps) {
  const { children, className: customStyles = "", ...rest } = props

  const combinedStyles = `
    ${selectStyles.base}
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
