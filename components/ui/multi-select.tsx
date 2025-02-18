"use client"

import IconButton from "@/components/ui/icon-button"
import { shift, size, useFloating } from "@floating-ui/react"
import { LucideChevronDown, LucideX } from "lucide-react"
import { type KeyboardEvent, type MouseEvent, useId, useState } from "react"

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
  {
    label: "Option 4",
    value: "option-4",
  },
  {
    label: "Option 5",
    value: "option-5",
  },
  {
    label: "Option 6",
    value: "option-6",
  },
]

export default function MultiSelect() {
  const [isFocused, setIsFocused] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState("")

  const id = useId()

  const { floatingStyles, refs } = useFloating({
    middleware: [
      shift(),
      size({
        apply({ elements, rects }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
          })
        },
      }),
    ],
    open: isOpen,
    placement: "bottom-start",
  })

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      alert(value)
    }
  }

  function onClear(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    setValue("")
    // setIsOpen(true)
  }

  return (
    <>
      <label className="text-gray-12 text-14 mb-4 inline-block" htmlFor={id}>
        Multi select
      </label>
      <label
        className="border-gray-5 hover:border-gray-8 data-[focused=true]:border-gray-12 relative flex h-40 w-full cursor-text items-center border border-solid pr-64 pl-12 transition-colors"
        data-focused={isFocused}
        htmlFor={id}
        ref={refs.setReference}
      >
        {!value && (
          <p className="text-gray-9 text-14 absolute left-12">Theme</p>
        )}

        <input
          className="text-gray-12 h-full w-full outline-0"
          id={id}
          onBlur={() => {
            setIsFocused(false)
            setIsOpen(false)
          }}
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
            onClick={onClear}
            size="small"
            variant="ghost"
          >
            <LucideX size={16} />
          </IconButton>
        )}

        <LucideChevronDown
          className="absolute right-8 transition-transform data-[is-open=true]:rotate-180"
          data-is-open={isOpen}
          size={16}
        />
      </label>

      {isOpen && (
        <div
          className="shadow-3 border-gray-5 bg-gray-1 flex flex-col overflow-y-auto border border-solid"
          ref={refs.setFloating}
          style={floatingStyles}
        >
          {options.map((option) => (
            <div
              className="text-gray-11 hover:bg-gray-3 hover:text-gray-12 flex h-36 cursor-pointer items-center gap-x-8 px-12 transition-colors"
              key={option.value}
              onClick={() => {
                setValue(option.label)
                setIsOpen(false)
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </>
  )
}
