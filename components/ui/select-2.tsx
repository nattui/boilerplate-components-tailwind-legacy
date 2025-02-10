"use client"

import { CaretDown } from "@phosphor-icons/react"
import { Select } from "radix-ui"

export default function Select2() {
  return (
    <Select.Root defaultValue="apple">
      <Select.Trigger className="d rounded-8 border-gray-5 flex h-40 min-w-256 items-center justify-between border border-solid px-12">
        Apple
        <CaretDown />
      </Select.Trigger>

      <Select.Content
        className="rounded-8 border-gray-5 bg-gray-1 w-full border border-solid p-2"
        position="popper"
      >
        <Select.Item className="px-12 py-4" value="apple">
          Apple
        </Select.Item>
        <Select.Item className="px-12 py-4" value="orange">
          Orange
        </Select.Item>
      </Select.Content>
    </Select.Root>
  )
}
