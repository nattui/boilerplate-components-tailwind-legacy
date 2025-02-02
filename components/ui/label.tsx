import type { ComponentProps, JSX } from "react"

export interface LabelProps extends ComponentProps<"label"> {
  children?: string
}

export const labelStyles = {
  base: ["text-13", "text-gray-a11", "w-fit"].join(" "),
} as const

export default function Label(props: LabelProps): JSX.Element {
  const { children = "", className: customStyles = "", ...rest } = props

  const combinedStyles = `
    ${labelStyles.base}
    ${customStyles}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return (
    <label className={combinedStyles} {...rest}>
      {children}
    </label>
  )
}
