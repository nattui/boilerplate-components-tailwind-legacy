import type { JSX } from "react"

export const labelStyles = {
  base: ["w-fit", "text-13"].join(" "),
} as const

type LabelProps = JSX.IntrinsicElements["label"]

export default function Label(props: LabelProps) {
  const { className: customStyles = "", ...rest } = props

  const combinedStyles = `
    ${labelStyles.base}
    ${customStyles}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return <label className={combinedStyles} {...rest} />
}
