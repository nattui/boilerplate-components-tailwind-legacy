import type { CSSProperties, JSX } from "react"
import styles from "@/components/ui/button-spinner.module.css"

interface ButtonSpinnerProps {
  size?: number
}

export default function ButtonSpinner(props: ButtonSpinnerProps): JSX.Element {
  const { size = 16 } = props

  return (
    <div
      className={styles.base}
      style={{ "--size": `${size}px` } as CSSProperties}
    >
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} />
      ))}
    </div>
  )
}
