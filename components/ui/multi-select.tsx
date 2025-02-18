"use client"

import IconButton from "@/components/ui/icon-button"
import { LucideChevronDown, LucideX } from "lucide-react"
import { type KeyboardEvent, useId, useState } from "react"

const options = [
  {
    label: "Option 1",
    value: "option-1",
  },
  {
    label: "Option 2",
    value: "option-2",
  },
  {
    label: "Option 3",
    value: "option-3",
  },
]

export default function MultiSelect() {
  const [isFocused, setIsFocused] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState("")

  const id = useId()

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      alert(value)
    }
  }

  return (
    <>
      <label
        className="border-gray-5 shadow-1 hover:border-gray-8 data-[focused=true]:border-gray-12 relative flex h-40 w-full cursor-text items-center border border-solid pr-64 pl-12 transition-colors"
        data-focused={isFocused}
        htmlFor={id}
      >
        {!value && (
          <p className="text-gray-9 text-14 absolute left-12">Theme</p>
        )}

        <input
          className="text-gray-12 h-full w-full outline-0"
          id={id}
          onBlur={() => setIsFocused(false)}
          onChange={(event) => setValue(event.target.value)}
          onClick={() => setIsOpen(true)}
          onFocus={() => setIsFocused(true)}
          onKeyDown={onKeyDown}
          type="text"
          value={value}
        />

        {value && (
          <IconButton
            className="absolute right-28 !h-24 !w-24"
            onClick={() => setValue("")}
            size="small"
            variant="ghost"
          >
            <LucideX size={16} />
          </IconButton>
        )}

        <LucideChevronDown className="absolute right-8" size={16} />
      </label>

      <div className="d absolute top-44 w-full">
        {options.map((option) => (
          <div key={option.value}>{option.label}</div>
        ))}
      </div>
    </>
  )
}
