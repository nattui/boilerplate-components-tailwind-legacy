import type { ReactNode } from "react"

export interface BadgeProps {
  children?: ReactNode
  value?: string
}

export default function Badge(props: BadgeProps) {
  const { children, value = "", ...rest } = props

  return (
    <div className="relative" {...rest}>
      {value && (
        <div className="bg-primary-9 text-12/100 text-gray-1 absolute -top-10 -right-10 z-10 flex h-20 min-w-20 items-center justify-center rounded-full px-4">
          {value}
        </div>
      )}
      {children}
    </div>
  )
}
