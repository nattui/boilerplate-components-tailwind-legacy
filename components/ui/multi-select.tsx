"use client"

import IconButton from "@/components/ui/icon-button"
import { autoUpdate, size, useFloating } from "@floating-ui/react-dom"
import { LucideChevronDown, LucideX } from "lucide-react"
import { useEffect, useId, useState } from "react"

export interface MultiSelectOption {
  label: string
  value: string
}

export default function MultiSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedOptions, setSelectedOptions] = useState<MultiSelectOption[]>(
    [],
  )

  const id = useId()

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

  function onClear() {
    setSearchTerm("")
    setSelectedOptions([])
  }

  function onSelect(option: MultiSelectOption) {
    // Focus on the trigger element
    const triggerElement = document.querySelector(
      ".element-trigger",
    ) as HTMLLabelElement
    triggerElement?.focus()

    // Clear the search term
    setSearchTerm("")

    // Add the selected option to the list of selected options
    setSelectedOptions((previous) => [...previous, option])
  }

  function onChipRemove(option: MultiSelectOption) {
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
    <div className="flex flex-col">
      {/* Label */}
      <label
        className="text-gray-12 text-14 element-label mb-4 inline-block"
        htmlFor={id}
      >
        Multi select
      </label>

      {/* Trigger */}
      <label
        className="element-trigger border-gray-5 hover:border-gray-8 data-[is-focused=true]:border-gray-12 relative flex min-h-40 w-full cursor-text flex-wrap items-center gap-4 border border-solid py-8 pr-64 pl-12 transition-colors"
        data-is-focused={isOpen}
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
            className="border-gray-5 flex max-w-full items-center gap-x-4 border border-solid px-4"
            key={index}
          >
            <span className="text-gray-12 text-14 truncate">
              {option.label}
            </span>
            <IconButton
              className="!rounded-0 !h-16 !w-16"
              onClick={() => onChipRemove(option)}
              variant="ghost"
            >
              <LucideX size={14} />
            </IconButton>
          </div>
        ))}

        {/* Input */}
        <input
          className="text-gray-12 grow-1 outline-0 data-[is-rendered=true]:pointer-events-none data-[is-rendered=true]:absolute"
          data-is-rendered={!isOpen && !searchTerm}
          id={id}
          onChange={(event) => setSearchTerm(event.target.value)}
          onFocus={() => setIsOpen(true)}
          type="text"
          value={searchTerm}
        />

        {/* Clear button */}
        {(searchTerm || selectedOptions.length > 0) && (
          <IconButton
            className="!rounded-0 absolute right-28 !h-24 !w-24"
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
            .filter((option: MultiSelectOption) => {
              const isNotSelected = !selectedOptions.some(
                (selected) => selected.value === option.value,
              )
              const matchesSearch =
                searchTerm.trim() === "" ||
                option.label.toLowerCase().includes(searchTerm.toLowerCase())
              return isNotSelected && matchesSearch
            })
            .map((option: MultiSelectOption) => (
              <button
                className="text-gray-11 hover:bg-gray-3 hover:text-gray-12 focus:bg-gray-3 focus:text-gray-12 flex h-36 shrink-0 cursor-pointer items-center gap-x-8 px-12 outline-0 transition-colors"
                key={option.value}
                onClick={() => onSelect(option)}
                type="button"
              >
                <span className="truncate">{option.label}</span>
              </button>
            ))}
        </div>
      )}
    </div>
  )
}

const options: MultiSelectOption[] = [
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
    label: "A super duper super duper super duper long option",
    value: "option-12",
  },
]
