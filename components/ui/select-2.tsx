"use client"

import { LucideChevronDown } from "lucide-react"
import { Select } from "radix-ui"
import { useState } from "react"

export default function Select2() {
  const [value, setValue] = useState("Apple")

  return (
    <Select.Root defaultValue="apple" onValueChange={setValue}>
      <Select.Trigger className="rounded-8 border-gray-5 bg-gray-2 outline-primary-9 shadow-1 flex h-40 min-w-256 cursor-pointer items-center justify-between border border-solid px-12 outline-0 outline-offset-2 select-none focus-visible:outline-2">
        {value}
        <LucideChevronDown size={16} />
      </Select.Trigger>

      <Select.Content
        className="rounded-8 border-gray-5 bg-gray-2 shadow-1 w-256 overflow-hidden border border-solid"
        position="popper"
        sideOffset={4}
      >
        <Select.Item
          className="text-14 hover:bg-gray-3 focus-visible:bg-gray-3 bg-gray-2 flex h-40 cursor-pointer items-center px-12 outline-0 transition-colors select-none"
          value="Apple"
        >
          Apple
        </Select.Item>
        <Select.Item
          className="text-14 hover:bg-gray-3 focus-visible:bg-gray-3 bg-gray-2 flex h-40 cursor-pointer items-center px-12 outline-0 transition-colors select-none"
          value="Orange"
        >
          Orange
        </Select.Item>
      </Select.Content>
    </Select.Root>
  )
}
