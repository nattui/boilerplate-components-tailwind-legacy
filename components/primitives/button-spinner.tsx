import styles from "@/components/primitives/button-spinner.module.css"

export default function ButtonSpinner() {
  return (
    <div className={styles.base}>
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} />
      ))}
    </div>
  )
}
