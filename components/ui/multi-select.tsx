"use client"

import IconButton from "@/components/ui/icon-button"
import { autoUpdate, size, useFloating } from "@floating-ui/react"
import { LucideChevronDown, LucideX } from "lucide-react"
import { type KeyboardEvent, useEffect, useId, useState } from "react"

type Option = (typeof options)[number]

export default function MultiSelect() {
  const [isFocused, setIsFocused] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([])

  const id = useId()

  console.log(":::: selectedOptions:", selectedOptions)
  console.log(":::: id:", id)

  // Floating UI start ////////////////////////////////////////////////////////
  const { floatingStyles, refs } = useFloating({
    middleware: [
      size({
        apply({ elements, rects }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
          })
        },
      }),
    ],
    placement: "bottom",
    whileElementsMounted: autoUpdate,
  })
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

  function onFocus() {
    setIsFocused(true)
    setIsOpen(true)
  }

  function onRemove(option: Option) {
    setSelectedOptions((previous) =>
      previous.filter((selected) => selected.value !== option.value),
    )
  }

  useEffect(() => {
    function handleOptionClickOutside(event: MouseEvent) {
      const contentElement = document.querySelector(".element-content")
      const labelElement = document.querySelector(".element-label")
      const triggerElement = document.querySelector(".element-trigger")

      const isClickOutside =
        contentElement &&
        !contentElement.contains(event.target as Node) &&
        labelElement &&
        !labelElement.contains(event.target as Node) &&
        triggerElement &&
        !triggerElement.contains(event.target as Node)

      if (isClickOutside) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleOptionClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleOptionClickOutside)
    }
  }, [isOpen])

  return (
    <>
      {/* Label */}
      <label
        className="text-gray-12 text-14 element-label mb-4 inline-block"
        htmlFor={id}
      >
        Multi select
      </label>

      {/* Trigger */}
      <label
        className="element-trigger border-gray-5 hover:border-gray-8 data-[focused=true]:border-gray-12 relative flex min-h-40 w-full cursor-text flex-wrap items-center gap-4 border border-solid py-8 pr-64 pl-12 transition-colors"
        data-focused={isFocused || isOpen}
        htmlFor={id}
        ref={refs.setReference}
      >
        {/* Placeholder */}
        {!searchTerm && selectedOptions.length === 0 && (
          <p className="text-gray-9 text-14 pointer-events-none absolute left-12 select-none">
            Theme
          </p>
        )}

        {/* Chips */}
        {selectedOptions.map((option, index) => (
          <div
            className="border-gray-5 flex items-center gap-x-4 border border-solid px-4"
            key={index}
          >
            <p className="text-gray-12 text-14">{option.label}</p>
            <IconButton
              className="!rounded-0 !h-16 !w-16"
              onClick={() => onRemove(option)}
              variant="ghost"
            >
              <LucideX size={14} />
            </IconButton>
          </div>
        ))}

        {/* Input */}
        <input
          className="text-gray-12 grow-1 outline-0"
          id={id}
          onBlur={() => setIsFocused(false)}
          onChange={(event) => setSearchTerm(event.target.value)}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          type="text"
          value={searchTerm}
        />

        {/* Clear button */}
        {(searchTerm || selectedOptions.length > 0) && (
          <IconButton
            className="absolute right-28 !h-24 !w-24"
            onClick={onClear}
            variant="ghost"
          >
            <LucideX size={16} />
          </IconButton>
        )}

        {/* Chevron icon */}
        <LucideChevronDown
          className="pointer-events-none absolute right-8 transition-transform data-[is-open=true]:rotate-180"
          data-is-open={isOpen}
          size={16}
        />
      </label>

      {/* Content */}
      {isOpen && (
        <div
          className="element-content bg-gray-1 border-gray-5 flex max-h-320 flex-col overflow-y-auto border-x border-b border-solid"
          ref={refs.setFloating}
          style={floatingStyles}
        >
          {options
            .filter(
              (option: Option) =>
                !selectedOptions.some(
                  (selected) => selected.value === option.value,
                ),
            )
            .map((option: Option) => (
              <button
                className="text-gray-11 hover:bg-gray-3 hover:text-gray-12 focus:bg-gray-3 focus:text-gray-12 flex h-36 shrink-0 cursor-pointer items-center gap-x-8 px-12 outline-0 transition-colors"
                key={option.value}
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
