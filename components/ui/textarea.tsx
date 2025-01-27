import type { ComponentProps, JSX } from "react"
import { inputStyles } from "@/components/ui/input"

export interface TextareaProps extends ComponentProps<"textarea"> {}

const textareaStyles = {
  base: ["py-8"].join(" "),
}

export default function Textarea(props: TextareaProps): JSX.Element {
  const { className: customStyles = "", rows = 3, ...rest } = props

  const combinedStyles = `
    ${textareaStyles.base}
    ${inputStyles.base}
    ${customStyles}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return (
    <textarea
      className={combinedStyles}
      rows={rows}
      style={{ minHeight: `${21 * rows + 19}px` }}
      {...rest}
    />
  )
}
