import type { ComponentProps, JSX } from "react"

export interface LabelProps extends ComponentProps<"label"> {}

export const labelStyles = {
  base: ["text-13", "text-mauve-a11", "w-fit"].join(" "),
} as const

export default function Label(props: LabelProps): JSX.Element {
  const { className: customStyles = "", ...rest } = props

  const combinedStyles = `
    ${labelStyles.base}
    ${customStyles}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return <label className={combinedStyles} {...rest} />
}
