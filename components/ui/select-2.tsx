"use client"

import { CaretDown } from "@phosphor-icons/react"
import { Select } from "radix-ui"

export default function Select2() {
  return (
    <Select.Root defaultValue="apple">
      <Select.Trigger className="rounded-8 border-gray-5 bg-gray-2 outline-primary-9 flex h-40 min-w-256 items-center justify-between border border-solid px-12 outline-0 outline-offset-2 select-none focus-visible:outline-2">
        Apple
        <CaretDown />
      </Select.Trigger>

      <Select.Content
        className="rounded-8 border-gray-5 bg-gray-2 w-256 overflow-hidden border border-solid"
        position="popper"
      >
        <Select.Item
          className="text-14 hover:bg-gray-3 focus-visible:bg-gray-3 bg-gray-2 flex h-40 cursor-pointer items-center px-12 outline-0 transition-colors select-none"
          value="apple"
        >
          Apple
        </Select.Item>
        <Select.Item
          className="text-14 hover:bg-gray-3 focus-visible:bg-gray-3 bg-gray-2 flex h-40 cursor-pointer items-center px-12 outline-0 transition-colors select-none"
          value="orange"
        >
          Orange
        </Select.Item>
      </Select.Content>
    </Select.Root>
  )
}
