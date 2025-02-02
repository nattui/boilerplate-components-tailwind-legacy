import type { ComponentProps, JSX } from "react"

export interface LabelProps extends ComponentProps<"label"> {
  children?: string
}

export const labelStyles = {
  base: ["text-13", "text-gray-a11", "w-fit"].join(" "),
} as const

export default function Label(props: LabelProps): JSX.Element {
  const { children = "", className: customStyles = "", ...rest } = props

  const isEndingWithAsterisk = children.endsWith("*")

  const processedText = isEndingWithAsterisk ? children.slice(0, -1) : children

  const combinedStyles = `
    ${labelStyles.base}
    ${customStyles}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return (
    <label className={combinedStyles} {...rest}>
      {processedText}
      {isEndingWithAsterisk && <span className="text-[#ff0000]">*</span>}
    </label>
  )
}
