"use client"

import IconButton from "@/components/ui/icon-button"
import { LucideX } from "lucide-react"
import { useId, useState } from "react"

export default function Select3() {
  const [isFocused, setIsFocused] = useState(false)
  const [value, setValue] = useState("")

  const id = useId()

  return (
    <label
      className="border-gray-5 shadow-1 hover:border-gray-8 data-[focused=true]:border-gray-12 relative flex h-40 w-full cursor-text items-center border border-solid pr-32 pl-12 transition-colors"
      data-focused={isFocused}
      htmlFor={id}
    >
      <input
        className="h-full w-full outline-0"
        id={id}
        onBlur={() => setIsFocused(false)}
        onChange={(event) => setValue(event.target.value)}
        onFocus={() => setIsFocused(true)}
        type="text"
        value={value}
      />

      {/* <span>test</span> */}
      {value && (
        <IconButton
          className="absolute right-0"
          onClick={() => setValue("")}
          size="small"
          variant="ghost"
        >
          <LucideX size={16} />
        </IconButton>
      )}
    </label>
  )
}
