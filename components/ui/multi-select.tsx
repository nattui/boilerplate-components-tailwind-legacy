"use client"

import IconButton from "@/components/ui/icon-button"
import { autoUpdate, size, useFloating } from "@floating-ui/react-dom"
import { LucideChevronDown, LucideX } from "lucide-react"
import {
  type Dispatch,
  type KeyboardEvent,
  type ReactNode,
  type SetStateAction,
  useEffect,
  useId,
  useState,
} from "react"

export interface MultiSelectOption {
  image?: ReactNode
  label: string
  value: string
}

export interface MultiSelectProps {
  label?: string
  options?: MultiSelectOption[]
  placeholder?: string
  setSelectedOptions?: Dispatch<SetStateAction<MultiSelectOption[]>>
}

export default function MultiSelect(props: MultiSelectProps) {
  const [highlightedIndex, setHighlightedIndex] = useState<number>(0)
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [internalSelectedOptions, setInternalSelectedOptions] = useState<
    MultiSelectOption[]
  >([])

  const {
    label = "",
    options = [],
    placeholder = "",
    setSelectedOptions,
  } = props

  const id = useId()

  // Floating UI start ////////////////////////////////////////////////////////
  const { floatingStyles, refs } = useFloating({
    middleware: [
      size({
        apply({ availableHeight, elements, rects }) {
          const maxHeight = availableHeight - 16
          const maxHeightIsTooSmall = maxHeight < 240

          elements.floating.style.maxHeight = maxHeightIsTooSmall
            ? "240px"
            : `${maxHeight}px`
          elements.floating.style.width = `${rects.reference.width}px`
        },
      }),
    ],
    placement: "bottom",
    whileElementsMounted: autoUpdate,
  })
  // Floating UI end //////////////////////////////////////////////////////////

  function onClear() {
    setSearchTerm("")
    setInternalSelectedOptions([])
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
    setInternalSelectedOptions((previous) => [...previous, option])
  }

  function onChipRemove(option: MultiSelectOption) {
    setInternalSelectedOptions((previous) =>
      previous.filter((selected) => selected.value !== option.value),
    )
  }

  const filteredOptions = options.filter((option: MultiSelectOption) => {
    const isNotSelected = !internalSelectedOptions.some(
      (selected) => selected.value === option.value,
    )
    const matchesSearch =
      searchTerm.trim() === "" ||
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    return isNotSelected && matchesSearch
  })

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (!isOpen) return
    switch (event.key) {
      case "ArrowDown": {
        event.preventDefault()
        if (filteredOptions.length === 0) return
        setHighlightedIndex((prev) =>
          prev < filteredOptions.length - 1 ? prev + 1 : 0,
        )

        break
      }
      case "ArrowUp": {
        event.preventDefault()
        if (filteredOptions.length === 0) return
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredOptions.length - 1,
        )

        break
      }
      case "Enter": {
        if (
          highlightedIndex >= 0 &&
          highlightedIndex < filteredOptions.length
        ) {
          event.preventDefault()
          onSelect(filteredOptions[highlightedIndex])
          setHighlightedIndex(0)
        }

        break
      }
    }
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

  useEffect(() => {
    if (setSelectedOptions) {
      setSelectedOptions(internalSelectedOptions)
    }
  }, [internalSelectedOptions, options, setSelectedOptions])

  return (
    <div className="flex flex-col">
      {/* Label */}
      {label && (
        <label
          className="text-gray-12 text-14 element-label mb-4 inline-block w-fit"
          htmlFor={id}
        >
          {label}
        </label>
      )}

      {/* Trigger */}
      <label
        className="element-trigger border-gray-5 hover:border-gray-8 data-[is-focused=true]:border-gray-12 relative flex min-h-40 w-full cursor-text flex-wrap items-center gap-4 border border-solid py-8 pr-64 pl-12 transition-colors"
        data-is-focused={isOpen}
        htmlFor={id}
        ref={refs.setReference}
      >
        {/* Placeholder */}
        {!searchTerm && internalSelectedOptions.length === 0 && (
          <p className="text-gray-9 text-14 pointer-events-none absolute left-12 select-none">
            {placeholder}
          </p>
        )}

        {/* Chips */}
        {internalSelectedOptions.map((option, index) => (
          <div
            className="border-gray-5 flex max-w-full items-center border border-solid pr-4 pl-6 [&>svg]:mr-4 [&>svg]:size-14 [&>svg]:shrink-0"
            key={index}
          >
            {option.image}
            <span className="text-gray-12 text-14 truncate">
              {option.label}
            </span>
            <IconButton
              className="!rounded-0 !mr-0 ml-2 !h-16 !w-16"
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
          onKeyDown={handleKeyDown}
          type="text"
          value={searchTerm}
        />

        {/* Clear button */}
        {(searchTerm || internalSelectedOptions.length > 0) && (
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
          className="element-content bg-gray-1 border-gray-5 flex flex-col overflow-y-auto border-x border-b border-solid"
          ref={refs.setFloating}
          style={floatingStyles}
        >
          {filteredOptions.map((option: MultiSelectOption, index: number) => (
            <div
              className="text-gray-11 hover:bg-gray-3 hover:text-gray-12 data-[is-highlighted=true]:bg-gray-3 data-[is-highlighted=true]:text-gray-12 flex h-36 shrink-0 cursor-pointer items-center gap-x-8 px-12 outline-0 transition-colors select-none [&>svg]:size-16"
              data-is-highlighted={highlightedIndex === index}
              key={option.value}
              onClick={() => onSelect(option)}
            >
              {option.image}
              <span className="truncate">{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
