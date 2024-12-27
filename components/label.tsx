import { forwardRef, type LabelHTMLAttributes } from "react"

export type LabelProps = LabelHTMLAttributes<LabelRef>
export type LabelRef = HTMLLabelElement

export const labelStyles = {
  base: ["w-fit", "text-13"].join(" "),
} as const

export const Label = forwardRef<LabelRef, LabelProps>((props, ref) => {
  const { className: customStyles = "", ...rest } = props

  const combinedStyles = `
    ${labelStyles.base}
    ${customStyles}
  `.trim()

  return <label className={combinedStyles} ref={ref} {...rest} />
})

Label.displayName = "Label"

export default Label
