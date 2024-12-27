import { Input } from "@/components/input"

export default function InputsPage() {
  return (
    <div className="flex h-[100dvh] flex-col items-center gap-16 overflow-y-auto py-128">
      {/* Input */}
      <div className="flex w-320 items-center justify-center gap-8">
        <Input defaultValue="Hello world" fullWidth />
      </div>
    </div>
  )
}
