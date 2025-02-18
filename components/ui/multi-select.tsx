"use client"

import IconButton from "@/components/ui/icon-button"
import {
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react"
import { LucideChevronDown, LucideX } from "lucide-react"
import { type KeyboardEvent, useId, useState } from "react"

type Option = (typeof options)[number]

export default function MultiSelect() {
  const [isFocused, setIsFocused] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([])

  console.log(":::: selectedOptions:", selectedOptions)

  const id = useId()

  // Floating UI start ////////////////////////////////////////////////////////
  const { context, floatingStyles, refs } = useFloating({
    middleware: [
      size({
        apply({ elements, rects }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
          })
        },
      }),
    ],
    onOpenChange: setIsOpen,
    open: isOpen,
    placement: "bottom",
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)
  const role = useRole(context)

  const { getFloatingProps, getReferenceProps } = useInteractions([
    click,
    dismiss,
    role,
  ])
  // Floating UI end //////////////////////////////////////////////////////////

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      alert(searchTerm)
    }
  }

  function onClear() {
    setSearchTerm("")
    setSelectedOptions([])
  }

  function onSelect(option: Option) {
    setSelectedOptions((previous) => [...previous, option])
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
        {...getReferenceProps()}
      >
        {!searchTerm && (
          <p className="text-gray-9 text-14 absolute left-12 select-none">
            Theme
          </p>
        )}

        <input
          className="text-gray-12 h-full w-full outline-0"
          id={id}
          onBlur={() => setIsFocused(false)}
          onChange={(event) => setSearchTerm(event.target.value)}
          onClick={() => setIsOpen(true)}
          onFocus={() => setIsFocused(true)}
          onKeyDown={onKeyDown}
          type="text"
          value={searchTerm}
        />

        {searchTerm && (
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
          className="bg-gray-1 border-gray-5 flex max-h-320 flex-col overflow-y-auto border-x border-b border-solid"
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          {options.map((option: Option, index: number) => (
            <button
              className="text-gray-11 hover:bg-gray-3 hover:text-gray-12 focus:bg-gray-3 focus:text-gray-12 flex h-36 shrink-0 cursor-pointer items-center gap-x-8 px-12 outline-0 transition-colors"
              key={index}
              onClick={() => onSelect(option)}
              type="button"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </>
  )
}

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
  {
    label: "Option 7",
    value: "option-7",
  },
  {
    label: "Option 8",
    value: "option-8",
  },
  {
    label: "Option 9",
    value: "option-9",
  },
  {
    label: "Option 10",
    value: "option-10",
  },
  {
    label: "Option 11",
    value: "option-11",
  },
  {
    label: "Option 12",
    value: "option-12",
  },
]
