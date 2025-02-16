import type { ComponentProps, JSX } from "react"

export interface BadgeProps extends ComponentProps<"div"> {
  value?: string
}

export default function Badge(props: BadgeProps): JSX.Element {
  const { children, value = "", ...rest } = props

  return (
    <div className="relative" {...rest}>
      {value && (
        <div className="bg-primary-9 border-gray-2 text-12/100 text-gray-1 pointer-events-none absolute -top-2 -right-2 z-10 flex h-20 min-w-20 items-center justify-center rounded-full border border-solid px-2 select-none">
          {value}
        </div>
      )}
      {children}
    </div>
  )
}
