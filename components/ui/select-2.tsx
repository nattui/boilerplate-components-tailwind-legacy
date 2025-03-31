"use client"

import { LucideChevronDown } from "lucide-react"
import { Select } from "radix-ui"

export default function Select2() {
  return (
    <Select.Root defaultValue="light">
      <Select.Trigger className="rounded-8 border-gray-5 outline-primary-9 data-[active=true]:border-gray-8 active:border-gray-8 disabled:!border-gray-5 focus:border-gray-8 hover:border-gray-8 text-gray-12 text-14 font-400 shadow-1 flex h-40 w-full cursor-pointer items-center justify-between border border-solid px-12 leading-150 outline-0 outline-offset-2 transition-[background-color,border-color,opacity] duration-150 focus-visible:outline-2">
        <Select.Value placeholder="Theme" />

        <Select.Icon asChild>
          <LucideChevronDown size={16} />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className="border-gray-5 rounded-8 shadow-1 max-h-(--radix-select-content-available-height) w-(--radix-select-trigger-width) border border-solid p-4"
          position="popper"
          sideOffset={4}
        >
          <Select.Viewport>
            <Select.Item
              className="data-[highlighted]:bg-gray-3 hover:bg-gray-3 rounded-8 font-500 hover:text-gray-12 flex cursor-pointer items-center gap-x-8 px-8 py-6 transition-colors outline-none select-none"
              value="light"
            >
              <Select.ItemText>Light</Select.ItemText>
            </Select.Item>

            <Select.Item
              className="data-[highlighted]:bg-gray-3 hover:bg-gray-3 rounded-8 font-500 hover:text-gray-12 flex cursor-pointer items-center gap-x-8 px-8 py-6 transition-colors outline-none select-none"
              value="dark"
            >
              <Select.ItemText>Dark</Select.ItemText>
            </Select.Item>

            <Select.Item
              className="data-[highlighted]:bg-gray-3 hover:bg-gray-3 rounded-8 font-500 hover:text-gray-12 flex cursor-pointer items-center gap-x-8 px-8 py-6 transition-colors outline-none select-none"
              value="system"
            >
              <Select.ItemText>System</Select.ItemText>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
