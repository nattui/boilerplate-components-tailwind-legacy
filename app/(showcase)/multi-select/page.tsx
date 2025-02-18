"use client"

import MultiSelect, {
  type MultiSelectOption,
} from "@/components/ui/multi-select"
import { LucideFile, LucideGlobe, LucideImage } from "lucide-react"
import { useState } from "react"

export default function Inputs2Page() {
  const [selectedOptions, setSelectedOptions] = useState<MultiSelectOption[]>(
    [],
  )

  return (
    <>
      <div className="w-320">
        <MultiSelect
          label="Multi select"
          options={options}
          placeholder="Theme"
          setSelectedOptions={setSelectedOptions}
        />
      </div>

      <div className="mt-32 w-672">
        {selectedOptions.map((option, index) => (
          <div className="mb-16 flex flex-col gap-4" key={index}>
            <p className="text-gray-12 text-14 font-mono">
              label: {option.label}
            </p>
            <p className="text-gray-12 text-14 font-mono">
              Value: {option.value}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

const options: MultiSelectOption[] = [
  {
    image: <LucideImage />,
    label: "Option 1",
    value: "option-1",
  },
  {
    image: <LucideImage />,
    label: "Option 2",
    value: "option-2",
  },
  {
    image: <LucideFile />,
    label: "Option 3",
    value: "option-3",
  },
  {
    image: <LucideFile />,
    label: "Option 4",
    value: "option-4",
  },
  {
    image: <LucideGlobe />,
    label: "Option 5",
    value: "option-5",
  },
  {
    image: <LucideGlobe />,
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
    value: "a-super-duper-long-option",
  },
  {
    image: <LucideFile />,
    label: "Another super duper super duper super duper long option",
    value: "another-super-duper-long-option",
  },
]
